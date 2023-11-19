import Button from "@mui/material/Button";
import supabase from "../backend/supabase.js";

export default async function Page({ params }: { params: { club: string } }) {
    const club = await supabase.from('clubs').select('*').eq('id', parseInt(params.club));
    const clubData = club.data && club.data.length > 0 ? club.data[0] : {name: 'Error' , description: 'Error this club does not exist.'};
    const user = {
        firstName: 'Russell',
        lastName: 'leung',
        email: 'russell-leung@comcast.net',
        id: 1,
        role: 2,
    };
    // function to check role, if role is 0 = not part of club, 1 = member, 2 = admin
    return (
        <div className="text-center flex flex-col w-full">
            <div className="flex flex-col">
                <h1 className="text-6xl p-5">{clubData.name}</h1>
                <img src={supabase.storage.from('club_images').getPublicUrl(clubData.image)["data"]["publicUrl"]} className="w-1/3 m-auto" />
                <h1 className="text-4xl p-5">{clubData.description}</h1>
                {user.role == 0 ? <Button variant="outlined" href="/club/members" className="w-1/3 m-auto">Join Club</Button> : null}
            </div>
        </div>
    )
}
