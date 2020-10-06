import Link from 'next/link';
import { useCallback } from "react";

const Cards = props => {
    const { movies, isLoading, page, handleNextPage, handlePreviousPage } = props;

    // api doesn't return a rate unless its a request for a specific movie
    const rate = [
        '3.0', '3.5', '4.0', '4.5', '5.0',
        '5.5', '6.0', '6.5', '7.0', '7.5',
        '8.0', '8.5', '9.0', '9.5', '10'
    ]

    const numGetRandom = useCallback(() => {
        return Math.floor(Math.random() * ((rate.length - 1) + 1))
    }, [])

    return (
        <div className="container">
            <div className="tab-content">

                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                    <div className="row custom_row">

                        {
                            isLoading
                                ? null
                                : movies.map((movie, ind) => (
                                    <div
                                        key={ind}
                                        className="col-6 col-sm-4 col-md-3 col-xl-2"
                                    >
                                        <div className="card">

                                            <div className="card__cover">
                                                <img src={movie.Poster} alt={movie.Title} />
                                                <Link href={`/movie/${movie.imdbID}/`}>
                                                    <a className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                </Link>
                                                <span className="card__rate card__rate--green">
                                                    {rate[numGetRandom()]}
                                                </span>
                                            </div>

                                            <div className="card__content">
                                                <h3 className="card__title">
                                                    <a href="#">
                                                        {movie.Title}
                                                    </a>
                                                </h3>

                                                <span className="card__category">
                                                    <a href="#">{movie.Type}</a>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>

                <button className="custom_buttons" onClick={handleNextPage}>
                    Next
                </button>

                {
                    parseInt(page) !== 1
                        ? <button className="custom_buttons" onClick={handlePreviousPage}>
                            Previous
                        </button>
                        : null
                }

            </div>
        </div>
    )
}

export default Cards;