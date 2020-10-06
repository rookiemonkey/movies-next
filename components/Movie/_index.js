import { useEffect, useState } from "react";

const ShowMovie = props => {
    const { movieid } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({})

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            const main = `https://www.omdbapi.com/?apikey=f4de5974`
            const url = `${main}&i=${movieid}`;
            const raw = await fetch(url);
            const parsed = await raw.json();
            setMovie(parsed)
            setIsLoading(false);
        })()
    }, [movieid])

    return (

        <section
            className="section section--details section--bg"
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section__title">{movie.Title}</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card card--details">
                            <div className="row">

                                <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                                    <div className="card__cover">
                                        <img src={movie.Poster} alt="" />
                                        <span className="card__rate card__rate--green">
                                            {movie.imdbRating}
                                        </span>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                                    <div className="card__content">
                                        <ul className="card__meta">

                                            <li>
                                                <span>Director:</span>
                                                <a href='#'>
                                                    {movie.Director}
                                                </a>
                                            </li>

                                            <li>
                                                <span>Writer:</span>
                                                <a href='#'>
                                                    {movie.Writer}
                                                </a>
                                            </li>

                                            <li>
                                                <span>Cast:</span>
                                                <a href='#'>
                                                    {movie.Actors}
                                                </a>
                                            </li>

                                            <li>
                                                <span>Genre:</span>
                                                <a href='#'>
                                                    {movie.Genre}
                                                </a>
                                            </li>

                                            <li>
                                                <span>Release:</span>
                                                <a href='#'>
                                                    {movie.Released}
                                                </a>
                                            </li>

                                            <li>
                                                <span>Running time:</span>
                                                <a href='#'>
                                                    {movie.Runtime} min
                                                </a>
                                            </li>

                                            <li>
                                                <span>Country:</span>
                                                <a href='#'>
                                                    {movie.Country}
                                                </a>
                                            </li>

                                        </ul>

                                        <div className="card__description">
                                            {movie.Plot}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="col-12 col-lg-6">
                        <video controls crossOrigin="true" playsInline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" id="player" >

                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />

                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720" />

                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080" />

                            <track kind="captions" label="English" srcLang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default />

                            <track kind="captions" label="Français" srcLang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />

                            <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>
                                Download
                            </a>
                        </video>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default ShowMovie;