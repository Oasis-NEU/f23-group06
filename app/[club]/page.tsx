import Button from "@mui/material/Button";
import supabase from "../backend/supabase.js";

export default function Page() {

    const club = {title: 'Club Title', description: 'Lorem ipsum', id: 1, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'};
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
                <h1 className="text-6xl p-5">{club.title}</h1>
                <img src={club.image} className="w-1/3 m-auto" />
                <h1 className="text-4xl p-5">{club.description}</h1>
                {user.role == 0 ? <Button variant="outlined" href="/club/members" className="w-1/3 m-auto">Join Club</Button> : null}
            </div>
        </div>
    )
}
