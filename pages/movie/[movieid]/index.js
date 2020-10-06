import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ShowMovie from '../../../components/Movie/_index';

const Movie = props => {
    const { movieid } = props;

    return (
        <React.Fragment>
            <Header />

            <ShowMovie
                movieid={movieid}
            />

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

export default Movie;