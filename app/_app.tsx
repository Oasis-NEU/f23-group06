import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import NavBar from './components/NavBar';
import { FaUserCircle } from 'react-icons/fa';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className="m-3 flex justify-end"><FaUserCircle size={100} /></div>
      <div className='flex'>
        <div className='z-10'><NavBar /></div>
        <div className='w-4/5 z-20'><Component {...pageProps} /></div>
      </div>
    </NextUIProvider>
  )
}
