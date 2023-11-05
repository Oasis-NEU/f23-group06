'use client'
require('dotenv').config()
import { Button } from "@nextui-org/react"
import supabase from "../backend/supabase.js";
import Image from 'next/image'

const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    return url
  }

async function signInWithAzure() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
            scopes: 'email',
            redirectTo: getURL(),
        },
    })
}

export default function Page() {
    return (
        <div className="flex align-middle justify-center flex-col w-screen h-screen">
            <div className="border-black border w-96 h-96 flex justify-center my-auto mx-auto flex-col">
                <div className="h-5/6 w-full">
                    Club hub logo    
                </div>
                <Button onClick={signInWithAzure} className="w-fit mx-auto text-lg">Login with Microsoft</Button>
            </div>
        </div>
    )
}