import {Table, TableHeader, TableColumn, 
    TableBody, TableRow, TableCell, Chip} from "@nextui-org/react";
import MemberModal from "../../components/AddMemberModal"
import {useCallback} from "react";

export default function Page() {

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
        <div className="w-full h-screen dark text-foreground">
            <div className="mx-auto w-4/5 mt-1/2 h-min">
                <Table isStriped>
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={members}>
					{(member) => (
						<TableRow key={member.id}>
                            {(columnKey) => {return <TableCell>{renderRow(member, columnKey)}</TableCell>}}
                        </TableRow>
					)}
				</TableBody>
                </Table>
                <br></br>
                <div className="w-full h-screen">
                    <div className="mx-auto w-min mt-1/2 h-min">
                        <MemberModal/>
                    </div>
                </div>
            </div>
        </div>
    )
}