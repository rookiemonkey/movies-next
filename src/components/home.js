import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useForm from '../helpers/useForm';
import Nav from './extras/nav';
import homeStyles from '../styles/style-home';

const Home = props => {
    const { classes } = props;
    const [input, handleInput, handleReset] = useForm('')

    const handleOnSubmit = event => {
        event.preventDefault()
        handleReset()
    }

    return (
        <article>
            <Nav />

            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleOnSubmit}
            >

                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={input}
                    onChange={handleInput}
                />

            </form>

        </article>
    )
}

export default withStyles(homeStyles, { withTheme: true })(Home);