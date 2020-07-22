import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Nav from '../../components/nav';
import MovieCard from '../../components/movieCard'
import setResults from '../../utilities/setResults';

const SearchResults = () => {
    const router = useRouter();
    const searchTerm = router.query.input;
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=f4de5974&s=${searchTerm}`)
            .then(res => { return res.json() })
            .then(data => setResults(data, setSearchResults, setTotalResults))
    }, [searchTerm])

    const movieCards = searchResults.map((movie, i) => {
        return <MovieCard {...movie} key={i} />
    })

    return (
        <article>
            <Nav />
            <h1>Total Results: {totalResults}</h1>
            {movieCards}
        </article>
    )
}

export default SearchResults;