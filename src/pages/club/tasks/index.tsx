import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


export default function App() {
    //get from API
    const rows = [
        {key: 1, name: "Scott Abramson", email: "abramson.s@northeastern.edu", label: "business student"},
        {key: 2, name: "Test 2", email: "test@test.com", label: "business student"},
        {key: 3, name: "Test 3", email: "test@test.com", label: "business student"},
    ]
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
                {(item) => (
                <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
  );
}
