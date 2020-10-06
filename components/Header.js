import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from "react";

const Header = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleChange = useCallback(event => {
        setQuery(event.target.value);
    }, [query])

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        router.push(`/search?q=${query}`)
    })

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__content">

                            <Link href="/">
                                <a className="header__logo">
                                    <img src="/assets/img/logo.svg" alt="" />
                                </a>
                            </Link>

                            <ul className="header__nav">

                                <li className="header__nav-item">
                                    <Link href="/">
                                        <a className="header__nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                            </ul>

                            <div className="header__auth">

                                <form
                                    method="POST"
                                    onSubmit={handleSubmit}
                                    className="header__search"
                                >

                                    <input
                                        className="header__search-input"
                                        type="text"
                                        value={query}
                                        onChange={handleChange}
                                        placeholder="Search..."
                                    />

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