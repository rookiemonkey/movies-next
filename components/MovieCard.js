import React, { memo } from 'react';
import style from '../assets/styles/card.module.css';

const MovieCard = memo(props => {

    return (
        <div className={style.movie_card} data-movie="Blade Runner">
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
                        Blade Runner
                    </h1>
                    <h4 className={style.movie_card__info}>
                        (1982) Sci-Fi, Thriller
                    </h4>
                </div>

                <p className={style.movie_card__desc}>
                    A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.
                </p>

                <button className={`${style.btn} ${style.btn_outline} ${style.movie_card__button}`} type="button">
                    Watch Trailer
                </button>

            </div>
        </div>
    )
})

export default MovieCard;