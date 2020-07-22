import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Nav from '../../components/nav';
import MovieCard from '../../components/movieCard';

const SearchResults = props => {
    const movies = props.movies.Search
    const totalMovies = props.totalResults
    const movieCards = movies.map((movie, i) => {
        return <MovieCard {...movie} key={i} />
    })

    return (
        <article>
            <Nav />
            <h1>Total Results: {totalMovies}</h1>
            {movieCards}
        </article>
    )
}

SearchResults.getInitialProps = async context => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=f4de5974&s=${context.query}`);
    const movies = await res.json();
    return { movies: movies }
}

export default SearchResults;