import React from 'react';
import { useRouter } from 'next/router'
import TextField from '@material-ui/core/TextField';
import useForm from '../utilities/useForm';
import Nav from '../components/nav';
import homeStyles from '../styles/style-home';

const Home = () => {
    const classes = homeStyles();
    const router = useRouter()
    const [input, handleInput, handleReset] = useForm('')

    const handleOnSubmit = event => {
        event.preventDefault()
        router.push(`/movies/${input}`)
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

export default Home;