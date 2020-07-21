import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Nav from './extras/nav';
import homeStyles from '../styles/style-home';

const Home = props => {
    const { classes } = props;

    return (
        <article>
            <Nav />

            <form className={classes.form} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>

        </article>
    )
}

export default withStyles(homeStyles, { withTheme: true })(Home);