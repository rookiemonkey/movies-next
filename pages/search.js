import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchResults from '../components/SearchResults/_index';

const Search = props => {
    const { q } = props;

    return (
        <React.Fragment>
            <Header />

            <SearchResults queryString={q} />

            <Footer />
        </React.Fragment>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;

    return {
        props: query,
    }
}

export default Search