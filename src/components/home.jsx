// import GioiThieu from "./menu";
import Header from "./layout/header";
import About from "./views/about";
import Banner from "./views/banner";
import Bannerr from "./views/banner1";
import Contact from "./views/contact";
import Hero from "./views/hero";



function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Banner />
            <About />
            <Bannerr />
            <Contact />
        </>
    )
}



export default Home;