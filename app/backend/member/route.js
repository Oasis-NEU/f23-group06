import { NextResponse } from 'next/server'
import supabase from '../supabase'

export async function POST(request) {

    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = formData.get('email')
    const first = formData.get("first")
    const last = formData.get("last")
    const labels = formData.getAll("labels")

    const {data, error1} = await supabase.from("users").insert({email: email, first_name: first, last_name: last}).select()
    const {error2} = await supabase.from("club_users").insert({user_id: data[0].id, club_id: formData.get("club_id"), labels: labels})

    let redirectUrl = requestUrl.origin +  "/" + formData.get("club_id") + "/members"
    

    return NextResponse.redirect(redirectUrl, {
        status: 301,
    })
}