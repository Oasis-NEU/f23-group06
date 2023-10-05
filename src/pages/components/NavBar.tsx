//Nav bar on the left side
import { BsPeople } from 'react-icons/bs';
import { MdEventNote } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import { BsSuitClubFill } from 'react-icons/bs';

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

const drawerWidth = 240;

export default function NavBar() {
    return(
        <Box sx={{display: 'flex'}}>
        <Drawer
            sx={{
            width: 290,
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
                <Typography variant = 'h4'>
                    <ListItemButton >
                        <ListItemIcon>
                            <BsPeople />
                        </ListItemIcon>
                        <ListItemText primary="Members" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <MdEventNote />
                        </ListItemIcon>
                        <ListItemText primary="  Events" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <BsListTask />
                        </ListItemIcon>
                        <ListItemText primary="  Tasks" />
                    </ListItemButton>
                </Typography>
            </List>
        </Drawer>
        </Box>
    );
} 
