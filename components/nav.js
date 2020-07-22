import React from 'react';
import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import navStyles from '../styles/style-nav';

const Nav = () => {
    const classes = navStyles();
    const router = useRouter();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Movies DB
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => { router.push('/') }}
                    >Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;