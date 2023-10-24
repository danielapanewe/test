import Banner from '../UI/Banner';
import Header from '../UI/Header';
import Ourproducts from '../features/Home/Ourproducts';
import Ourservices from '../features/Home/Ourservices';
import Testimonial from '../features/Home/Testimonial';
import Footer from '../UI/Footer';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Ourservices />
            <Ourproducts />
            <Testimonial />
            <Footer />
        </>
    );
}

export default Home;
