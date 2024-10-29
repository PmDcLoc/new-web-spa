import '../../style/hero.scss'
import menu1 from '../../assets/imaage/menu1.jpg'
import menu11 from '../../assets/imaage/menu11.jpg'
import menu111 from '../../assets/imaage/menu111.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'


function Hero() {
    useEffect(() => {
        Aos.init()

    }, [])
    return (

        <div className='hero'>
            <div className='text_hero' data-aos='fade-right'>
                <h2> Dịch Vụ Nổi Bật </h2>
            </div>

            <div className='main'>
                <div className='main2' data-aos='fade-right'>

                    <img src={menu1} alt="" />


                    <div className='text_main'>
                        <h3>Massage thư giãn toàn thân<br/>(Body Massage)</h3>
                        <p>Phương pháp massage Thụy Điển, Thái, và đá nóng giúp kích thích tuần hoàn máu và cải thiện giấc ngủ.</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>

                <div className='main2' data-aos='fade-right'>
                    <img src={menu11} alt="" />
                    <div className='text_main'>
                        <h3>Chăm sóc da mặt chuyên sâu<br/> (Facial Treatment)</h3>
                        <p>Sử dụng các sản phẩm dưỡng da cao cấp để cấp ẩm, trẻ hóa làn da, chống lão hóa, trị mụn và làm sạch da với từng loại da</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>

                <div className='main2' data-aos='fade-right'>
                    <img src={menu111} alt="" />
                    <div className='text_main'>
                        <h3>Gói xông hơi và tắm thảo dược<br/> (Herbal Sauna & Bath)</h3>
                        <p>Phòng xông hơi đá muối giúp đào thải độc tố, hỗ trợ giảm cân.
                        Tắm thảo dược tự nhiên giúp thư giãn tinh thần và cải thiện sức khỏe.</p>
                        <br />
                        <Link to='/'> Xem chi tiết</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Hero