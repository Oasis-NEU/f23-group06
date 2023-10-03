import { FaUserCircle } from 'react-icons/fa';
export default function Home() {
	// TODO: Fetch clubs from API, and render them here
	const clubs = [
		{title: 'Club 1', description: 'Club 1 description', id: 1},
		{title: 'Club 2', description: 'Club 2 description', id: 2},
		{title: 'Club 3', description: 'Club 3 description', id: 3},
		{title: 'Club 4', description: 'Club 4 description', id: 4},
		{title: 'Club 5', description: 'Club 5 description', id: 5},
		{title: 'Club 6', description: 'Club 6 description', id: 6},
		{title: 'Club 7', description: 'Club 7 description', id: 7},
		{title: 'Club 8', description: 'Club 8 description', id: 8},
		{title: 'Club 9', description: 'Club 9 description', id: 9},
	];
	const renderClubs = clubs.map((club) => 
		<div key={club.id} className="border border-black w-1/4 p-10 m-3">
			<h1 className="text-3xl">{club.title}</h1>
			<p className="text-2xl">{club.description}</p>
			<button>Go to Club</button>
		</div>
	);
	return (
		<div className="flex">
			{/* Space for NavBar  */}
			<div className="w-1/5 bg-black h-screen"></div>
			<div className="w-4/5 text-center flex flex-col">
				<div className="m-3 flex justify-end"><FaUserCircle size={100} /></div>
				<h1 className="text-6xl p-5">Welcome to ClubHub</h1>
				<h1 className="text-4xl p-5">Club Selection Menu</h1>
				<div className="flex flex-row flex-wrap justify-center">
					{renderClubs}
				</div>
			</div>
		</div>
	)
}
