import { useEffect, useState } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';

const Showcase = () => {
    const [movieType, setMovieType] = useState('2020');
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=f4de5974&s=${movieType}`;
            const raw = await fetch(url);
            const { Search } = await raw.json();
            setMovies(Search)
            setIsLoading(false);
        })()
    }, [movieType])

    return (
        <section className="content">
            <Tabs
                setMovieType={setMovieType}
            />

            <Cards
                isLoading={isLoading}
                movies={movies}
            />
        </section>
    )
}

export default Showcase;