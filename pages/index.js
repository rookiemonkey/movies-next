import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Showcase from '../components/Showcase/_index';

const Home = () => {
    return (
        <React.Fragment>
            <Header />

            <Carousel />

            <Showcase />

            <Footer />
        </React.Fragment>
    );
}

export default Home;