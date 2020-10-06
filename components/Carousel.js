const Carousel = () => {

    return (

        <section className="home">

            {/* CAROUSEL BACKGROUND IMAGES */}
            <div className="owl-carousel home__bg">

                <div className="item home__cover" data-bg="/assets/img/home/home__bg.jpg">

                </div>

                <div className="item home__cover" data-bg="/assets/img/home/home__bg2.jpg">

                </div>

                <div className="item home__cover" data-bg="/assets/img/home/home__bg3.jpg">

                </div>

                <div className="item home__cover" data-bg="/assets/img/home/home__bg4.jpg">

                </div>

                <div className="item home__cover" data-bg="/assets/img/home/home__bg5.jpg">

                </div>

            </div>


            {/* CAROUSEL MOVIE CARDS */}
            <div className="container">

                <div className="row">

                    <div className="col-12">

                        <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

                        <button className="home__nav home__nav--prev" type="button">

                            <i className="icon ion-ios-arrow-round-back"></i>

                        </button>

                        <button className="home__nav home__nav--next" type="button">

                            <i className="icon ion-ios-arrow-round-forward"></i>

                        </button>

                    </div>

                    <div className="col-12">

                        <div className="owl-carousel home__carousel">


                            <div className="card card--big">

                                <div className="card__cover">

                                    <img src="/assets/img/covers/cover.jpg" alt="" />

                                    <a href="#" className="card__play">

                                        <i className="icon ion-ios-play"></i>

                                    </a>

                                    <span className="card__rate card__rate--green">8.4</span>

                                </div>

                                <div className="card__content">

                                    <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>

                                    <span className="card__category">

                                        <a href="#">Action</a>

                                        <a href="#">Triler</a>

                                    </span>

                                </div>

                            </div>

                            <div className="card card--big">

                                <div className="card__cover">

                                    <img src="/assets/img/covers/cover2.jpg" alt="" />

                                    <a href="#" className="card__play">

                                        <i className="icon ion-ios-play"></i>

                                    </a>

                                    <span className="card__rate card__rate--green">7.1</span>

                                </div>

                                <div className="card__content">

                                    <h3 className="card__title"><a href="#">Benched</a></h3>

                                    <span className="card__category">

                                        <a href="#">Comedy</a>

                                    </span>

                                </div>

                            </div>

                            <div className="card card--big">

                                <div className="card__cover">

                                    <img src="/assets/img/covers/cover3.jpg" alt="" />

                                    <a href="#" className="card__play">

                                        <i className="icon ion-ios-play"></i>

                                    </a>

                                    <span className="card__rate card__rate--red">6.3</span>

                                </div>

                                <div className="card__content">

                                    <h3 className="card__title"><a href="#">Whitney</a></h3>

                                    <span className="card__category">

                                        <a href="#">Romance</a>

                                        <a href="#">Drama</a>

                                    </span>

                                </div>

                            </div>

                            <div className="card card--big">

                                <div className="card__cover">

                                    <img src="/assets/img/covers/cover4.jpg" alt="" />

                                    <a href="#" className="card__play">

                                        <i className="icon ion-ios-play"></i>

                                    </a>

                                    <span className="card__rate card__rate--green">7.9</span>

                                </div>

                                <div className="card__content">

                                    <h3 className="card__title"><a href="#">Blindspotting</a></h3>

                                    <span className="card__category">

                                        <a href="#">Comedy</a>

                                        <a href="#">Drama</a>

                                    </span>

                                </div>

                            </div>

                            <div className="card card--big">

                                <div className="card__cover">

                                    <img src="/assets/img/covers/cover5.jpg" alt="" />

                                    <a href="#" className="card__play">

                                        <i className="icon ion-ios-play"></i>

                                    </a>

                                    <span className="card__rate card__rate--green">7.9</span>

                                </div>

                                <div className="card__content">

                                    <h3 className="card__title"><a href="#">Blindspotting</a></h3>

                                    <span className="card__category">

                                        <a href="#">Comedy</a>

                                        <a href="#">Drama</a>

                                    </span>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Carousel;