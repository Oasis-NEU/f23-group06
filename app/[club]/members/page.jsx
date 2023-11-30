'use client';
import {Table, TableHeader, TableColumn, 
    TableBody, TableRow, TableCell, Chip, getKeyValue} from "@nextui-org/react";
import MemberModal from "../../components/AddMemberModal"
import React from 'react'

export default function Page() {
    const rows = [
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

		<div className="flex flex-col gap-3 w-full mx-8">
			<Table key="1" aria-label="Table of Members" selectionMode="multiple" classNames={
				{
					base: "w-full",
					table: "w-full"
				}
			}>
				<TableHeader columns={columns} key="2">
					{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
				</TableHeader>
				<TableBody items={rows}>
					{(item) => (
						<TableRow key={item.id}>
							{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="w-full h-screen">
				<div className="mx-auto w-min mt-1/2 h-min">
					<MemberModal/>
				</div>
			</div>
		</div>
    )
}