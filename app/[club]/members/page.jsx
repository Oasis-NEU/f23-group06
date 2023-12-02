'use server';
import Members from "../../components/Members"
import React from 'react'
import supabase from "../../backend/supabase";

export default async function Page({ params }) {

  const { data: club_users, error1 } = await supabase.from("club_users").select("id, user_id, labels, users (id,first_name,last_name,email)").eq("club_id", params.club)

  for (let i = 0; i < club_users.length; i++) {
    let el = club_users[i].users;
    club_users[i].name = el.first_name + " " + el.last_name
    club_users[i].email = el.email
  }

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "EMAIL",
    },
    {
      key: "labels",
      label: "LABELS",
    },
  ];

  return (
    <Members rows={club_users} columns={columns} />
  )
}