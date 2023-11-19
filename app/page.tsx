import UserBubble from "../app/components/UserBubble";
import supabase from './backend/supabase';
import { ClubButton } from "./components/ClubButton";

/* 
For working with the API:
1. User logs in
2. After log in, the user gets redirected here.
3. Get the ID of every club that the user is a part of
4. Use the ID to get the name and image for each club
5. Render
*/
export default async function Page() {
	const { data: clubs} = await supabase.from('clubs').select('*');
	return (
		<div className="text-center flex flex-col w-full">
			<div className="text-6xl p-5 flex justify-between items-center">
				<h1 className="text-center flex-grow">
					Welcome to ClubHub
				</h1>
				<div className="absolute top-0 right-0 mr-3 mt-3"><UserBubble /></div>
			</div>
			<h1 className="text-4xl p-5">Club Selection Menu</h1>
			<div className="flex flex-row flex-wrap justify-center">
				{clubs?.map((club) => (
					<div key={club.id} className="border border-black w-1/4 p-10 m-3">
						<h1 className="text-3xl">{club.name}</h1>
						<img src={supabase.storage.from('club_images').getPublicUrl(club.image)["data"]["publicUrl"]} />
						<ClubButton clubId={club.id} />
					</div>
				))}
			</div>
		</div>
	)
}
