import { FaUserCircle } from 'react-icons/fa';
import Button from "@mui/material/Button";
import UserBubble from "../app/components/UserBubble";

/* 
For working with the API:
1. User logs in
2. After log in, the user gets redirected here.
3. Get the ID of every club that the user is a part of
4. Use the ID to get the name and image for each club
5. Render
*/
export default function Page() {
	// TODO: Fetch clubs from API, and render them here
	const clubs = [
		{title: 'Club 1', description: 'Club 1 description', id: 1, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
		{title: 'Club 2', description: 'Club 2 description', id: 2, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
		{title: 'Club 3', description: 'Club 3 description', id: 3, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
		{title: 'Club 4', description: 'Club 4 description', id: 4, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
		{title: 'Club 5', description: 'Club 5 description', id: 5, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
		{title: 'Club 6', description: 'Club 6 description', id: 6, image: 'https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg'},
	];
	return (
		<div className="text-center flex flex-col w-full">
			<div className="text-6xl p-5 flex justify-between items-center">
				<h1 className="text-center flex-grow">
					Welcome to ClubHub
				</h1>
				<div className="absolute top-0 right-0"><UserBubble /></div>
			</div>
			<h1 className="text-4xl p-5">Club Selection Menu</h1>
			<div className="flex flex-row flex-wrap justify-center">
				{clubs.map((club) => (
					<div key={club.id} className="border border-black w-1/4 p-10 m-3">
						<h1 className="text-3xl">{club.title}</h1>
						<p className="text-2xl">{club.description}</p>
						<img src={club.image} />
						{/* TODO: click saves club id into local storage */}
						<Button variant="outlined" href="/club">Go to Club</Button>
					</div>
				))}
			</div>
		</div>
	)
}
