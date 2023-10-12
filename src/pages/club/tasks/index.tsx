import React from "react";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import db from "../../../backend/db"
import { Timestamp, collection, getDocs } from "firebase/firestore";
import {Table, TableHeader, TableColumn, TableBody,
		TableRow, TableCell, getKeyValue, Button, Link} from "@nextui-org/react";


type task = {
	id: string,
	description: string,
	due_date: Date,
	assignees: string[]
}

export const getServerSideProps/*: Promise<{ props: {tasks: task}[] }>*/ = async () => {
	let tasks: task[] = []
	const querySnapshot = await getDocs(collection(db, "tasks"))
	querySnapshot.forEach((doc) => {
		//console.log(`${doc.id} => ${doc.data()}`);
		const data = doc.data();
		tasks.push({id: doc.id, description: data.description, due_date: new Timestamp(data.due_date.seconds, data.due_date.nanoseconds).toDate(), assignees: data.assignees})
	})
	//let tasks = [{ id: 1, description: "Make tasks work", due_date: 12345, assignees: ["Scott", "Scott2", "Scott45"] }]
	return { props: { tasks } }
}

//"assignees":[{"converter":null,"_key":{"path":{"segments":["projects","clubhub-40a49","databases","(default)","documents","users","QUrb1EusOLoYIDY6r31o"]

/* {"description":"Make backend","assignees":[{"converter":null,"_key":{"path":{"segments":["projects","clubhub-40a49","databases","(default)","documents","users","QUrb1EusOLoYIDY6r31o"],"offset":5,"len":2}},"type":"document","firestore":{"app":{"_isDeleted":false,"_options":{"appId":"1:973856715546:web:c509a8eeab390aacacb2a3","projectId":"clubhub-40a49","authDomain":"clubhub-40a49.firebaseapp.com","databaseURL":"","storageBucket":"clubhub-40a49.appspot.com","messagingSenderId":"973856715546","measurementId":"G-FNL170K2Y5"},"_config":{"name":"[DEFAULT]","automaticDataCollectionEnabled":false},"_name":"[DEFAULT]","_automaticDataCollectionEnabled":false,"_container":{"name":"[DEFAULT]","providers":{}}},"databaseId":{"projectId":"clubhub-40a49","database":"(default)"},"settings":{"host":"firestore.googleapis.com","ssl":true,"ignoreUndefinedProperties":false,"cacheSizeBytes":41943040,"experimentalForceLongPolling":false,"experimentalAutoDetectLongPolling":true,"experimentalLongPollingOptions":{},"useFetchStreams":true}}}],"due_date":{"seconds":1696954500,"nanoseconds":762000000}}*/

export default function Page({ tasks }: InferGetServerSidePropsType<GetServerSideProps>) {
	//get from API
	const rows = tasks
	//fixed
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
			key: "role",
			label: "ROLE",
		},
	]

	return (
		<div className="flex flex-col gap-3 w-full mx-8">
			<Table aria-label="Example table with dynamic content" selectionMode="multiple" classNames={
				{
					base: "w-full",
					table: "w-full"
				}
			}>
				<TableHeader columns={columns}>
					{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
				</TableHeader>
				<TableBody items={rows}>
					{(item: task) => (
						<TableRow key={item.id}>
							{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>
			<Link href="/club/tasks/add">
				<Button>Add Task</Button>
			</Link>
		</div>
	);
}
