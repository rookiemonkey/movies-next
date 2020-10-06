const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__content">

                            <a href="index.html" className="header__logo">
                                <img src="assets/img/logo.svg" alt="" />
                            </a>

                            <ul className="header__nav">

                                <li className="header__nav-item">
                                    <a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuHome"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </a>
                                </li>

                            </ul>



                            <div className="header__auth">

                                <form action="#" className="header__search">

                                    <input className="header__search-input" type="text" placeholder="Search..." />

                                    <button className="header__search-button" type="button">
                                        <i className="icon ion-ios-search" ></i>
                                    </button>

                                    <button className="header__search-close" type="button">
                                        <i className="icon ion-md-close"></i>
                                    </button>

                                </form>

                                <button className="header__search-btn" type="button">
                                    <i className="icon ion-ios-search"></i>
                                </button>

                            </div>



                            <button className="header__btn" type="button">

                                <span></span>

                                <span></span>

                                <span></span>

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;