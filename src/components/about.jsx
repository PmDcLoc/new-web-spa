import  { useEffect } from 'react';
import '../style/about.scss'
import Dichvu from "./dichvu/dv/dv"


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<>
        <Dichvu />
    </>
    )
}

export default About