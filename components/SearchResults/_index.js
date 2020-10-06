import { useCallback, useEffect, useState } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';

const SearchResults = props => {
    const { queryString } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async function () {
            setPage(1);
            setIsLoading(true);
            const main = `https://www.omdbapi.com/?apikey=f4de5974`
            const url = `${main}&s=${queryString}&page=${1}`;
            const raw = await fetch(url);
            const parsed = await raw.json();
            setMovies(parsed.Search)
            setIsLoading(false);
        })()
    }, [queryString])

    const handleNextPage = useCallback(async () => {
        setPage(parseInt(page) + 1)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setIsLoading(true);
        const main = `https://www.omdbapi.com/?apikey=f4de5974`
        const url = `${main}&s=${queryString}&page=${page + 1}`;
        const raw = await fetch(url);
        const parsed = await raw.json();
        setMovies(parsed.Search)
        setIsLoading(false);
    }, [page])

    const handlePreviousPage = useCallback(async () => {
        setPage(parseInt(page) - 1)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        setIsLoading(true);
        const main = `https://www.omdbapi.com/?apikey=f4de5974`
        const url = `${main}&s=${queryString}&page=${page - 1}`;
        const raw = await fetch(url);
        const parsed = await raw.json();
        setMovies(parsed.Search)
        setIsLoading(false);
    }, [page])

    return (
        <section className="content">
            <Tabs queryString={queryString} />

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

export default SearchResults;