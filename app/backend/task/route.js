import { NextResponse } from 'next/server'
import supabase from '../supabase'

export async function POST(request) {
    console.log(request)

    const requestUrl = new URL(request.url)
    console.log(1)
    const formData = await request.formData()
    console.log(2)
    const description = formData.get('description')
    console.log(description)
    console.log(3)
    const date = new Date(formData.get("date")).toISOString()
    console.log(date)
    console.log(4)
    const assignees = formData.getAll("assignee")
    console.log(assignees)
    console.log(assignees[0])
    console.log(5)
    const club_id = formData.get("club_id")
    console.log(club_id)

    const {data: things, error} = await supabase.from("tasks").insert({description: description, date: date,  club_id: club_id}).select()
    console.log(error)
    console.log(things)
    console.log(5)
    let stuff = []
    for (let index = 0; index < assignees.length; index++) {
        const a = assignees[index];
        console.log(4)
        stuff.push({user_id: a, task_id: things[0].id})
        console.log(3)
    }
    console.log(stuff)
    const {error2} = await supabase.from("task_assignees").insert(stuff)
    console.log(7)

    let redirectUrl = requestUrl.origin +  "/" + formData.get("club_id") + "/tasks"
    console.log(8)
    

    return NextResponse.redirect(redirectUrl, {
        status: 301,
    })
}