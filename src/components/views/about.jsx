import '../../style/about.scss'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import about from '../../assets/imaage/about.jpg'
import about1 from '../../assets/imaage/about1.jpg'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
function About() {

    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='about'>
            <div className='text_about' data-aos="fade-right">
                <h2> Sun Spa - Khám Phá  </h2>
            </div>
            <div className="main_about" data-aos="fade-left">
                <img src={about} alt="" className='ig1'/>
                <div className="about1">
                    <h2> Quay Lại Với Sun Spa</h2>
                    <p>Với hơn 15 năm kinh nghiệm làm việc và giảng dạy trong lĩnh vực massage tại Thành phố Hồ Chí Minh.<br/>
                        Đến với dịch vụ Massage Đà Nẵng bằng sự nhiệt huyết và đội ngũ kỹ thuật viên lành nghề, chúng tôi đã và đang nhận được rất nhiều sự hài lòng từ nhiều khách hàng.<br/>
                        Chúng tôi cam kết mang lại giá trị thực sự cho bạn</p>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /> <p>Cơ sở vật chất hiện đại và tiện nghi</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p> Đội ngũ nhân viên giàu kinh nghiệm</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p>Dịch vụ tiêu chuẩn, tiện ích đẳng cấp</p></div>
                </div>
            </div>
            <div className='text_about' data-aos="fade-right"></div>

            <div className="main_about" data-aos="fade-left">

                <div className="about2">
                    <h2>Khơi dậy mọi giác quan</h2>
                    <p>Với kiến trúc Chăm-Pa đầy mê hoặc, SPA được ví như chốn thiên đường chăm sóc sức khỏe, vẻ đẹp, tâm hồn. Nơi đây chính là điểm dừng chân lý tưởng để bạn cùng gia đình, bạn bè, người thân, ... đến và tận hưởng những khoảng khắc hạnh phúc nhất</p>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /> <p>Âm nhạc thư giãn êm dịu</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p>Hương thơm tinh dầu thiên nhiên</p></div>
                    <div className="icon"><CheckCircleOutlineRoundedIcon color="success" sx={{ fontSize: 30 }} /><p>Liệu pháp massage chuyên nghiệp</p></div>
                </div>
                <img src={about1} alt="" className='ig2'/>
            </div>
        </div>
    )
}

export default About