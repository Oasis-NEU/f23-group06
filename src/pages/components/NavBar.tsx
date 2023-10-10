import { BsPeople } from 'react-icons/bs';
import { MdEventNote } from 'react-icons/md';
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
        label: 'Members',
        icon: <BsPeople />,
        link: 'https://media.tenor.com/yAI9vGPhvokAAAAC/kiss-make-out.gif'
    },
    {
        label: 'Events',
        icon: <MdEventNote />, 
        link: 'https://i.makeagif.com/media/2-06-2016/7A8bW3.gif'
    },
    {
        label: 'Tasks',
        icon: <BsListTask />,
        link: 'https://media.tenor.com/j6m9SYy5SVwAAAAM/gayy-gay.gif'
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
