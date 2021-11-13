import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Myorders from '../Myorders/Myorders';
import Payments from '../Payments/Payments';
import UploadTestimonial from '../UploadTestimonial/UploadTestimonial';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;

export default function Dashboard() {
    let { path, url } = useRouteMatch();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                        <Link className=" text-dark ms-5 " to="/home"> Back </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
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
                    <ListItem button>
                        <Link className="dashboard-btn fw-bold" to={url}><i class="fas fa-border-all"></i> Dashboard Home</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link className="dashboard-btn fw-bold" to={`${url}/myorders`}><i class="fas fa-border-all"></i> My Orders</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link className="dashboard-btn fw-bold" to={`${url}/payments`}> <i class="fas fa-money-check-alt"></i> Payments</Link>

                    </ListItem>
                </List>
                <Divider />
                <Divider />
                <List>
                    <ListItem button>
                        <Link className="dashboard-btn fw-bold" to={`${url}/uploadatestimonial`}> <i class="fas fa-money-check-alt"></i> Tstimonial</Link>

                    </ListItem>
                </List>
                <Divider />
                <Divider />
                <List>
                    <ListItem button>
                        <Link className="dashboard-btn fw-bold" to={`${url}/makeadmin`}> <i class="fas fa-money-check-alt"></i> Make Admin</Link>

                    </ListItem>
                </List>
                <Divider />


            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {/* Using Switch in Dashboard */}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <Route path={`${path}/payments`}>
                        <Payments></Payments>
                    </Route>

                    <Route path={`${path}/myorders`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/uploadatestimonial`}>
                        <UploadTestimonial></UploadTestimonial>
                    </Route>
                    
                </Switch>
            </Box>
        </Box>
    );
}
