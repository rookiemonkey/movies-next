import { useCallback, useEffect, useState } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';

const Showcase = () => {
    const [movieType, setMovieType] = useState('2020');
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async function () {
            setPage(1);
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=f4de5974&s=${movieType}&page=${1}`;
            const raw = await fetch(url);
            const { Search } = await raw.json();
            setMovies(Search)
            setIsLoading(false);
        })()
    }, [movieType])

    const handleNextPage = useCallback(async () => {
        setPage(parseInt(page) + 1)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setIsLoading(true);
        const url = `http://www.omdbapi.com/?apikey=f4de5974&s=${movieType}&page=${page + 1}`;
        const raw = await fetch(url);
        const { Search } = await raw.json();
        setMovies(Search)
        setIsLoading(false);
    }, [page])

    const handlePreviousPage = useCallback(async () => {
        setPage(parseInt(page) - 1)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setIsLoading(true);
        const url = `http://www.omdbapi.com/?apikey=f4de5974&s=${movieType}&page=${page - 1}`;
        const raw = await fetch(url);
        const { Search } = await raw.json();
        setMovies(Search)
        setIsLoading(false);
    }, [page])

    return (
        <section className="content">
            <Tabs
                movieType={movieType}
                setMovieType={setMovieType}
            />

            <Cards
                isLoading={isLoading}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                page={page}
                movies={movies}
            />
        </section>
    )
}

export default Showcase;