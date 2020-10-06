const Tabs = props => {
    const { queryString } = props;

    return (
        <div className="content__head">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h2 className="content__title">
                            New items
                        </h2>

                        <h4 className="content__title__custom">
                            Search Results for "{queryString}"
                        </h4>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;