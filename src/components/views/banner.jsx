import '../../style/banner.scss'
import banner1 from '../../assets/imaage/banner1.jpg'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function Banner() {

    useEffect(() => {
        Aos.init()

    }, [])

    return (
        <div className='banner' data-aos='fade-down'>
            <img src={banner1} alt="" />
        </div>
    )
}

export default Banner;