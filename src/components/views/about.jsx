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
                <img src={about} alt="" className='ig1' />
                <div className="about1">
                    <h2> QUAY LẠI VỚI SUN SPA</h2>
                    <p>Với hơn 15 năm kinh nghiệm làm việc và giảng dạy trong lĩnh vực massage tại Thành phố Hồ Chí Minh.<br />
                        Đến với dịch vụ Massage Đà Nẵng bằng sự nhiệt huyết và đội ngũ kỹ thuật viên lành nghề, chúng tôi đã và đang nhận được rất nhiều sự hài lòng từ nhiều khách hàng.<br />
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
                <img src={about1} alt="" className='ig2' />
            </div>
            <div className="customer-reviews">
                <h2>Đánh giá của khách hàng</h2>
                <div className="reviews">
                    <div className="review-card">
                        <img src="https://images2.thanhnien.vn/528068263637045248/2023/4/27/c0309030-1682593558087535464110.jpg" alt="Customer 1" className="review-image" />
                        <div className="review-content">
                            <h3>Nghệ sĩ hài Anh Đức</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Dịch vụ tuyệt vời, nhân viên không những xinh mà còn thân thiện, vui tính. Không gian rộng rãi, đẳng cấp 5 sao. Mình sẽ quay trở lại sử dụng dịch vụ tại Cham.</p>
                        </div>
                    </div>
                    <div className="review-card">
                        <img src="https://cdn.alongwalk.info/vn/wp-content/uploads/2023/05/11095512/top-10-kieu-toc-hieuthuhai-dep-duoc-yeu-thich-nhat1683748512.jpg" alt="Customer 2" className="review-image" />
                        <div className="review-content">
                            <h3>Ca sĩ Hiếu Thứ Hai</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Bài thuốc tắm lá người Dao đỏ chính là dịch vụ ấn tượng nhất. Ngâm mình cảm giác như đang lạc vào núi rừng Sa Pa. Thật sự ai cũng nên thử một lần để biết được dịch vụ ở đây tuyệt vời đến mức nào!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About