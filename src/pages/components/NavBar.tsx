import { BsPeople } from 'react-icons/bs';
import { MdEventNote, MdHome } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import {useState} from 'react';

const drawerWidth = '15vw';

const navItems = [
    {
        label: "Home",
        icon: <MdHome/>,
        link: "../club"
    },
    {
        label: 'Members',
        icon: <BsPeople />,
        link: '../club/members'
    },
    {
        label: 'Events',
        icon: <MdEventNote />, 
        link: '../club/events'
    },
    {
        label: 'Tasks',
        icon: <BsListTask />,
        link: '../club/tasks'
    }
]

export default function NavBar() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    return(
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
            <Toolbar />
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
    );
}