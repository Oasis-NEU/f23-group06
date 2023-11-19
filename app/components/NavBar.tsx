'use client';
import { BsPeople } from 'react-icons/bs';
import { MdEventNote, MdHome } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import logo from '../../public/ClubHub-logos_transparent.svg'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import {useState} from 'react';

import Image from 'next/image';

const drawerWidth = '15vw';

export default function NavBar(props: any) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const clubId = props.props.club;
    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    const navItems = [
        {
            label: "Home",
            icon: <MdHome/>,
            link: `/${clubId}`
        },
        {
            label: 'Members',
            icon: <BsPeople />,
            link: `/${clubId}/members`
        },
        {
            label: 'Events',
            icon: <MdEventNote />, 
            link: `/${clubId}/events`
        },
        {
            label: 'Tasks',
            icon: <BsListTask />,
            link: `/${clubId}/tasks`
        }
    ]

    return(
        <>
            <Box sx={{display: 'flex'}}>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Link href="..">
                        <Image
                                src={logo}
                                priority={false}
                                alt='Logo'
                                width={200}
                                height={200}
                        />
                    </Link>
                </Box>
                <Divider />
                <List>
                    {navItems.map((item, index) => (
                        <Typography variant = 'h4' key={index}>
                            <Link href={item.link} style={{ textDecoration: 'none'}}>
                                <ListItemButton selected={selectedIndex === index && index != 0} onClick={(event) => handleListItemClick(event, index)}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText className="text-black " primary={item.label} />
                                </ListItemButton>
                            </Link>
                        </Typography>
                    ))}
                </List>
            </Drawer>
            </Box>
        </ >
    );
}