'use client'
import {
    Table, TableHeader, TableColumn,
    TableBody, TableRow, TableCell, Chip, getKeyValue
} from "@nextui-org/react";
import MemberModal from "./AddMemberModal"
import React from 'react'
export default async function Members({ rows, columns, club_id }) {

    function renderChips(k, v) {
        if (k == "labels") {
            let chips = v.map(label => <Chip key={label}>{label}</Chip>)
            return <div>{chips}</div>
        }
        return v
    }

    return (
        <div className="flex flex-col gap-3 w-full mx-8">
            <div className="justify-start w-min mt-1/2 h-min">
                <MemberModal club_id={club_id} />
            </div>
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
                            {(columnKey) => <TableCell>{
                                renderChips(columnKey, getKeyValue(item, columnKey))}</TableCell>
                            }
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}