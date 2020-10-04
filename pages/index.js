import React, { memo } from 'react';
import Navigation from '../components/Navigation';

const Home = memo(() => {
    return (
        <article>
            <Navigation />
        </article>
    )
})

export default Home;