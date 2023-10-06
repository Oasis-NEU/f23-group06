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

const drawerWidth = '15vw';

export default function NavBar() {
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
                {/* TODO: turn this into a dynamically rendered list */}
                {/* add this as a prop so we can customize nav bar on each page if need be */}
                <Typography variant = 'h4'>
                    <Link href="https://media.tenor.com/yAI9vGPhvokAAAAC/kiss-make-out.gif" style={{ textDecoration: 'none'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BsPeople />
                            </ListItemIcon>
                            <ListItemText className="text-black " primary="Members" />
                        </ListItemButton>
                    </Link>
                    <Link href="https://i.makeagif.com/media/2-06-2016/7A8bW3.gif" style={{ textDecoration: 'none'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MdEventNote />
                            </ListItemIcon>
                            <ListItemText className="text-black" primary="Events" />
                        </ListItemButton>
                    </Link>
                    <Link href="https://media.tenor.com/j6m9SYy5SVwAAAAM/gayy-gay.gif" style={{ textDecoration: 'none'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BsListTask />
                            </ListItemIcon>
                            <ListItemText className="text-black" primary="Tasks" />
                        </ListItemButton>
                    </Link>
                </Typography>
            </List>
        </Drawer>
        </Box>
    );
} 
