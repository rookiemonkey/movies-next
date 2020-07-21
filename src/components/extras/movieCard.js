import React from 'react';

const MovieCard = props => {
    const { Title, Year, imdbID } = props
    return (
        <section>
            <h6>{Title}</h6>
            <h6>{Year}</h6>
            <h6>{imdbID}</h6>
        </section>
    )
}

export default MovieCard;