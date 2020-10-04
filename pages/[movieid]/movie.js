import React, { memo } from 'react';
import fetch from 'isomorphic-unfetch';
import style from '../../assets/styles/movie.module.css';
import Navigation from '../../components/Navigation';

const Movie = memo(props => {

    return (
        <main>
            <Navigation />

            <section>
                <div className={style.movie_container}>
                    <div className={style.content}>
                        <img
                            className={style.image}
                            src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
                        />
                        <div className={style.info}>
                            <div className={style.title}>
                                <a href="#">
                                    <h2>Avengers: Endgame</h2>
                                </a>
                                <span>(2019)</span>
                            </div>
                            <div className={style.meta_actions}>
                                <div className={style.score}>
                                    <div className={style.percentage_circle}>
                                        <div className={style.percentage_circle_stroke}>
                                            <div className={style.percent}>
                                                <span>0<sup>%</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h1>User
                                         <br />
                                    Score</h1>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#"><i className="fas fa-list"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-bookmark"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                    </li>
                                    <li className={style.play_trailer}>
                                        <span><i className="fas fa-play"></i></span>
                                        <a href="#">Play Trailer</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={style.about}>
                                <div className={style.overview}>
                                    <h3>Overview</h3>
                                    <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
                                </div>
                                <div>
                                    <h3>Featured Crew</h3>
                                    <ul>
                                        <li>
                                            <p>
                                                <a href="#">John Waine</a>
                                                <h1>Director</h1>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <a href="#">John Waine</a>
                                                <h1>Director</h1>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
})

export async function getServerSideProps(context) {
    const { query } = context;

    const url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDBKEY}&i=${query.movieid}`

    const raw = await fetch(url)

    const parsed = await raw.json();

    return { props: parsed }
}

export default Movie;