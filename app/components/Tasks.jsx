'use client';
import React from "react";
import {Table, TableHeader, TableColumn, TableBody,
		TableRow, TableCell, getKeyValue, Chip} from "@nextui-org/react";
import TaskModal from "./AddTaskModal";

export default function Tasks({rows, columns}) {

    function renderChips(k, v) {
        if (k == "assignees") {
            let chips = v.map(person => <Chip key={person}>{person}</Chip>)
            return <div>{chips}</div>
        }
        return v
    }

    return (
        <div className="flex flex-col gap-3 w-full mx-8">
            <div className="justify-left w-min mt-1/2 h-min">
                <TaskModal />
            </div>
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
                            {(columnKey) => <TableCell>{renderChips(columnKey, getKeyValue(item, columnKey))}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}