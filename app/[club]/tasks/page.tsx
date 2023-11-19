'use client';
import React from "react";
import {Table, TableHeader, TableColumn, TableBody,
		TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import TaskModal from "../../components/AddTaskModal";

export default function Page() {
	const rows = [
        {key: 1, name: "Scott Abramson", email: "abramson.s@northeastern.edu", role: "business student"}
    ]
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
                {(item) => (
                <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
			<div className="w-full h-screen">
                <div className="mx-auto w-min mt-1/2 h-min">
                    <TaskModal/>
                </div>
            </div>
		</div>
	);
}
