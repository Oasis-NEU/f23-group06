import NavBar from '../components/NavBar';
import UserBubble from "../components/UserBubble";

export default function Layout({ children, params }: { children: React.ReactNode }) {
	return (
		<div>
            <div className="m-3 flex justify-end"><UserBubble /></div>
            <div className='flex'>
                <div className='z-10'><NavBar props={params} /></div>
                <div className='w-4/5 z-20'>{children}</div>
            </div>
        </div>
    );
}