'use server';
import Members from "../../components/Members"
import React from 'react'
import supabase from "../../backend/supabase";

export default async function Page({ params }) {

	const {data: club_users, error1} = await supabase.from("club_users").select("*")//.select("user_id,labels")//.eq("club_id", params.club);

	let user_ids = [];
	for (var i in club_users) {
		user_ids.push(parseInt(club_users[i]["user_id"]))
	}

	const {data: user_data, error2} = await supabase.from("users").select("id,first_name,last_name,email").in("id", user_ids)
	console.log(user_data);

	const rows = [];

    rows = [
        {id: 1, name: "John Doe", email: "jd@gmail.com", labels: ["President", "Treasurer"]},
        {id: 2, name: "Jane Doe", email: "snjd", labels: ["Vice President", "Secretary"]},
    ];
    const columns = [
        {
          key: "name",
          label: "NAME",
        },
        {
          key: "email",
          label: "EMAIL",
        },
        {
            key: "labels",
            label: "LABELS",
        },
    ];

    return (
		<Members rows={rows} columns={columns} />
    )
}