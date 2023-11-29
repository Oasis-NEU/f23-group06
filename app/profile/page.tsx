//Page where you customize your profile
"use client";
import supabase from "../backend/supabase.js";
import React, { useState } from 'react';
import { Input, User, Textarea, Avatar, Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from '@nextui-org/react';
import styles from './Profile.module.css';
import UserBubble from "../components/UserBubble";

//for the user to log out.
async function signOut() {
    const { error } = await supabase.auth.signOut();
}

export default function ProfilePage() {
    // Example data
    const user = {
      profilePicture: 'https://image.cnbcfm.com/api/v1/image/106878527-1620223837055-106748412-1602881184740-biden.jpg?v=1620224062',
      name: 'John Doe',
      email: 'john.doe@example.com',
      birthday: '9/20/1942',
      hometown: 'Scranton, Pennsylvania',
      interests: '- Politics \n - Economics \n - History \n - Sports \n - Computer Science',
      hobbies: '- Reading \n - Writing \n - Playing Sports \n - Playing Video Games',
      orgs: '- Oasis \n - Debate Club \n - Disrupt \n - Politics Club \n - Chess Club \n - Sandbox',
      skills: '- Public Speaking \n - Writing \n - Programming \n - Leadership'
    };
        const [name, setName] = useState(user.name);
        const [email, setEmail] = useState(user.email);
        const [hometown, setHometown] = useState(user.hometown);
        const [birthday, setBirthday] = useState(user.birthday);
        const [interests, setInterests] = useState(user.interests);
        const [hobbies, setHobbies] = useState(user.hobbies);
        const [orgs, setClubs] = useState(user.orgs);
        const [skills, setSkills] = useState('');

        return (
            <div className={styles.container}>
                <div className="w-11/12 h-5/6 flex justify-center">
                    <div className="w-4/12 h-5/6">
                        <Avatar src={user.profilePicture} className="border border-black w-2/3 h-1/2 ml-[80px] mt-5"/>
                        <Textarea
                            variant="bordered"
                            label="Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-11/12 h-20 ml-5 mt-11"
                        />
                        <Textarea
                            variant="bordered"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-11/12 h-20 ml-5 mt-5" 
                        />
                        <Textarea
                            variant="bordered"
                            label="Hometown"
                            placeholder="Enter your hometown"
                            value={hometown}
                            onChange={(e) => setHometown(e.target.value)}
                            className="w-11/12 h-20 ml-5 mt-5"
                        />
                        <Textarea
                            variant="bordered"
                            label="Birthday"
                            placeholder="Enter your birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className="w-11/12 h-20 ml-5 mt-5"
                        />
                    </div>
                    <div className="w-4/12 h-50">
                        <Textarea
                            variant="faded"
                            label="Interests"
                            placeholder="Enter your interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            className="w-11/12 h-1/2 ml-5 mt-5"
                            minRows={15}
                            maxRows={15}
                        />
                        <Textarea
                            variant="faded"
                            label="Hobbies"
                            placeholder="Enter your hobbies"
                            value={hobbies}
                            onChange={(e) => setHobbies(e.target.value)}
                            className="w-11/12 h-1/2 ml-5"
                            minRows={15}
                            maxRows={15}
                        />
                    </div>
                    <div className="w-4/12 h-50">
                        <Textarea
                            variant="faded"
                            label="Organizations"
                            placeholder="Enter the organizations you are a part of"
                            value={orgs}
                            onChange={(e) => setClubs(e.target.value)}
                            className="w-11/12 h-1/2 ml-5 mt-5"
                            minRows={15}
                            maxRows={15}
                        />
                        <Textarea
                            variant="faded"
                            label="Skills"
                            placeholder="Enter your skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="w-11/12 h-1/2 ml-5"
                            minRows={15}
                            maxRows={15}
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-0 mr-3 mt-3"> <UserBubble /></div>
            </div>
        );
    }