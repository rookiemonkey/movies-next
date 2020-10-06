const Cards = () => {

    return (
        <div className="container">
            <div className="tab-content">

                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                    <div className="row">

                        {/* CARD CONTAINER */}
                        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                            <div className="card">

                                <div className="card__cover">
                                    <img src="assets/img/covers/cover.jpg" alt="" />
                                    <a href="#" className="card__play">
                                        <i className="icon ion-ios-play"></i>
                                    </a>
                                    <span className="card__rate card__rate--green">8.4</span>
                                </div>

                                <div className="card__content">
                                    <h3 className="card__title">
                                        <a href="#">
                                            I Dream in Another Language
                                        </a>
                                    </h3>

                                    <span className="card__category">
                                        <a href="#">Action</a>
                                        <a href="#">Triler</a>
                                    </span>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards;