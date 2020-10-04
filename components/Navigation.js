import React, { memo, useCallback } from 'react';
import useForm from '../assets/utilities/useForm';

const Nav = memo(() => {
    const [input, handleInput, handleReset] = useForm('')

    const handleOnSubmit = useCallback(event => {
        event.preventDefault()
        router.push(`/movies/${input}`)
        handleReset()
    })

    return (
        <div >

        </div>
    );
})

export default Nav;