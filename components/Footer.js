const Footer = () => {

    return (
        <React.Fragment>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2 className="section__title"><b>
                                HotFlix</b> – Best Place for Movies
                            </h2>

                            <p className="section__text">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <b>using Lorem</b> Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </p>

                            <p className="section__text">
                                Content here, content here, making it look like <a href="#">readable</a> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default  model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer__content">

                                <a href="#" className="footer__logo">
                                    <img src="assets/img/logo.svg" alt="" />
                                </a>

                                <span className="footer__copyright">
                                    © 2020 HotFlix<br /> Create by
                                    <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">
                                        Dmitry Volkov
                                    </a>
                                </span>

                                <nav className="footer__nav">
                                    <a href="about.html">About Us</a>
                                    <a href="contacts.html">Contacts</a>
                                    <a href="privacy.html">Privacy Policy</a>

                                </nav>

                                <button className="footer__back" type="button">
                                    <i className="icon ion-ios-arrow-round-up"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}

export default Footer;