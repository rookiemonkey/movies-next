import React, { memo } from 'react';
import Link from 'next/link';
import style from '../assets/styles/card.module.css';

const MovieCard = memo(props => {
    const { movie } = props;

    return (
        <div className={style.movie_card} style={{
            backgroundImage: `url(http://img.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDBKEY}&i=${movie.imdbID})`,
            backgroundSize: 'cover'
        }}>
            <div className={style.movie_card__overlay}></div>
            <div className={style.movie_card__share}>
                <button className={`${style.movie_card__icon} ${style.button_custom}`} >
                    <i className="material-icons">&#xe87d;</i>
                </button>
                <button className={`${style.movie_card__icon} ${style.button_custom}`} >
                    <i className="material-icons">&#xe253;</i>
                </button>
                <button className={`${style.movie_card__icon} ${style.button_custom}`} >
                    <i className="material-icons">&#xe80d;</i>
                </button>
            </div>
            <div className={style.movie_card__content}>

                <div className={style.movie_card__header}>
                    <h1 className={style.movie_card__title}>
                        {movie.Title}
                    </h1>
                    <h4 className={style.movie_card__info}>
                        ({movie.Year}) {movie.Type}
                    </h4>
                </div>

                <Link href={`/${movie.imdbID}/movie`}>
                    <a>
                        <button
                            className={`${style.btn} ${style.btn_outline} ${style.movie_card__button}`}
                            type="button"
                        >More Info</button>
                    </a>
                </Link>

            </div>
        </div>
    )
})

export default MovieCard;