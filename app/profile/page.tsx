//Page where you customize your profile
import supabase from "../backend/supabase.js";
import { Input, User } from "@nextui-org/react";
import React from 'react';
import {Card, CardHeader, CardBody, Image} from '@nextui-org/react';
import styles from './Profile.module.css';
import UserBubble from "../components/UserBubble.tsx";

//for the user to log out.
async function signOut() {
    const { error } = await supabase.auth.signOut();
}

export default function ProfilePage() {
    // Example data
    const user = {
      profilePicture: 'data:image/jpeg;base64,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',
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  
    return (
        <div className={styles.container}>
            <Card className="py-4" style={{ backgroundColor: '#d0d0d0' }} shadow="sm">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl" src={user.profilePicture} width={270}/>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <h4 className="font-bold text-large">{user.name}</h4>
                    <small className="text-default-500">{user.email}</small>
                </CardBody>
            </Card>
            <div className={styles.userBubble}> <UserBubble /></div>
        </div>
      );
  }