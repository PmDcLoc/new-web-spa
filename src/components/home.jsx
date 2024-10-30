import  { useEffect } from 'react';
import Header from "./layout/header";
import About from "./views/about";
import Banner from "./views/banner";
import Bannerr from "./views/banner1";
import Contact from "./views/contact";
import Hero from "./views/hero";



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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