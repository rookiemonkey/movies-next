import { useCallback, useState } from "react";

const Tabs = props => {
    const { setMovieType } = props;

    const hancleClick = useCallback(event => {
        setMovieType(event.target.dataset.value)
    }, [])

    return (
        <div className="content__head">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h2 className="content__title">
                            New items
                        </h2>

                        <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">

                            <li
                                className="nav-item"
                                onClick={hancleClick}
                            >
                                <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true" data-value={new Date().getFullYear()}>
                                    NEW RELEASES
                                </a>
                            </li>

                            <li
                                className="nav-item"
                                onClick={hancleClick}
                            >
                                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false" data-value="Movies">
                                    MOVIES
                                </a>
                            </li>

                            <li
                                className="nav-item"
                                onClick={hancleClick}
                            >
                                <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" data-value="Series" aria-selected="false">
                                    TV SERIES
                                </a>
                            </li>

                            <li
                                className="nav-item"
                                onClick={hancleClick}
                            >
                                <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" data-value="Cartoons" aria-selected="false">
                                    CARTOONS
                                </a>
                            </li>

                        </ul>


                        <div className="content__mobile-tabs" id="content__mobile-tabs">

                            <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <input type="button" value="New releases" />
                                <span></span>
                            </div>

                            <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">

                                <ul className="nav nav-tabs" role="tablist">

                                    <li
                                        className="nav-item"
                                        onClick={hancleClick}
                                    >
                                        <a className="nav-link active" id="1-tab" data-toggle="tab" data-value={new Date().getFullYear()} href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                            NEWRELEASES
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item"
                                        onClick={hancleClick}
                                    >
                                        <a className="nav-link" data-value="Movies" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                                            MOVIES
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item"
                                        onClick={hancleClick}
                                    >
                                        <a className="nav-link" id="3-tab" data-value="Series" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
                                            TV SERIES
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item"
                                        onClick={hancleClick}
                                    >
                                        <a className="nav-link" data-value="Cartoons" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">
                                            CARTOONS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;