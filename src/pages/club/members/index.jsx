import {Table, TableHeader, TableColumn, 
    TableBody, TableRow, TableCell, Chip, getKeyValue} from "@nextui-org/react";
import MemberModal from "../../components/AddMemberModal"
import {useCallback} from "react";

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

    const renderRow = useCallback((member, columnKey) => {
        switch (columnKey)  {
            case "labels":
                return (
                    <div className="flex flex-row">
                        {member.labels.map((label) => {return <Chip color="primary" className="mx-[2px]">{label}</Chip>})}
                    </div>
                );
            default:
                return member[columnKey]
        };
    }, []);

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
                    <MemberModal/>
                </div>
            </div>
		</div>
    )
}