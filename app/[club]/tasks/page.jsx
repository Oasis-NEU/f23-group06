import Tasks from "../../components/Tasks"
import dayjs from 'dayjs';
import supabase from "../../backend/supabase";

export default async function Page({ params }) {

	const { data: tasks, error } = await supabase.from("tasks").select("id, description, date").eq("club_id", params.club)
	for (let k in tasks) {
		let el = tasks[k]
		const { data, asgn_err } = await supabase.from("task_assignees").select("users (first_name, last_name)").eq("task_id", el.id)
		tasks[k].assignees = data
	}
	for (let i = 0; i < tasks.length; i++) {
		let assignees = tasks[i].assignees
		tasks[i].assignees = [];
		for (let j = 0; j < assignees.length; j++) {
			let el = assignees[j].users
			tasks[i].assignees.push(el.first_name + " " + el.last_name)
		}
		
		let date = new Date(tasks[i].date)
		tasks[i].date = "" + (1 + date.getMonth()) + "-" + date.getDate() + "-" + date.getFullYear()
	}
	
	const columns = [
		{
			key: "description",
			label: "TASK",
		},
		{
			key: "assignees",
			label: "ASSIGNEES",
		},
		{
			key: "date",
			label: "CREATED ON",
		},
	]

	return (
		<Tasks rows={tasks} columns={columns} />
	);
}
