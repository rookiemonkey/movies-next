import React from 'react';

const MovieCard = props => {
    const { Title, Year, imdbID } = props
    return (
        <section>
            <span>{Title} {Year} {imdbID}</span>
        </section>
    )
}

export default MovieCard;