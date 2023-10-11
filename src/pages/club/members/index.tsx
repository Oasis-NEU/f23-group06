import {Table, TableHeader, TableColumn, 
    TableBody, TableRow, TableCell, getKeyValue, Button, Link} from "@nextui-org/react";


//TODO: Connect to database to draw member data
const data = [
    {
        id: 1,
        name: 'Russell Leung',
        email: 'leung.r@northeastern.edu',
        role: 'President'
    },
    {
        id: 2,
        name: 'Scott Ambramson',
        email: 'abramson.s@northeastern.edu',
        role: 'Vice President'
    },
    {
        id: 3,
        name: 'Vincient Demiasip',
        email: 'demiasip.v@northeastern.edu',
        role: 'Code monkey'
    },
    {
        id: 4,
        name: 'Campbell Lee',
        email: 'lee.camp@northeastern.edu',
        role: 'Code monkey'
    }
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
        key: "role",
        label: "ROLE",
    }
];

export default function Page() {
    return (
        <div className="w-full h-screen dark text-foreground">
            <div className="mx-auto w-4/5 mt-1/2 h-min">
                <Table isStriped>
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={data}>
                        {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
                <br></br>
                <Link href="/club/members/add">
                    <Button>Add Member</Button>
                </Link>
            </div>
        </div>
    )
}