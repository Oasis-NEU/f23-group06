import './globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";
import NavBar from './components/NavBar';
import { FaUserCircle } from 'react-icons/fa';

import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="m-3 flex justify-end"><FaUserCircle size={100} /></div>
          <div className='flex'>
            <div className='z-10'><NavBar /></div>
            <div className='w-4/5 z-20'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}