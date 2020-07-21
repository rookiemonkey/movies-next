import React, { useEffect, useState } from 'react';
import Nav from './extras/nav';
import MovieCard from './extras/movieCard'
import setResults from '../helpers/setResults';

const SearchResults = props => {
    const searchTerm = props.match.params.search;
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=f4de5974&s=${searchTerm}`)
            .then(res => { return res.json() })
            .then(data => setResults(data, setSearchResults, setTotalResults))
    }, [searchTerm])

    const movieCards = searchResults.map((m, i) => {
        return <MovieCard {...m} key={i} />
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