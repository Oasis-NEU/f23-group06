import {Table, TableHeader, TableColumn, 
    TableBody, TableRow, TableCell, Chip} from "@nextui-org/react";
import {collection, getDocs } from "firebase/firestore";
import db from "../../../backend/db"
import MemberModal from "../../components/AddMemberModal"
import {useCallback} from "react";

//This data needs to be programmatically generated :P
const DB_PATH = "clubs/club_hub/members"

//TODO: Connect to database to draw member data
export async function getServerSideProps() /*: Promise<{ props: { members: member[] } }>*/ {
    let members = []
    const querySnapshot = await getDocs(collection(db, DB_PATH))
    querySnapshot.forEach((doc) => {
		const data = doc.data();
	    members.push({
            id: doc.id,
            email: data.email,
            name: data.name,
            labels: data.labels,
        });
	})
	return { props: { members } }
}

export default function Page({members}) {

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