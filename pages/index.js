import React, { memo, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Navigation from '../components/Navigation';
import MovieCard from '../components/MovieCard';

const Home = memo(() => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {
            const year = new Date().getFullYear;
            const movie = 'Marvel'
            const raw = await fetch(`http://www.omdbapi.com/?apikey=f4de5974&s=${movie}&y=${year}`)
            const { Search } = await raw.json();
            setMovies(Search); setIsLoading(false);
        })()
    })

    return (
        <main>
            <Navigation />

            <section>
                <MovieCard />
            </section>
        </main>
    )
})

export default Home;