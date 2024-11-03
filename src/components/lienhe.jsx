import lienh from '../assets/imaage/nenanh.jpg';
import { useEffect } from 'react';
import '../style/lienhe.scss';

const ContactBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

<img src={lienh} alt="" className='anhnen' />
<div className="overlay"></div>
      <div className="contact-booking-container">
        <div className="contact-details">
          <h1>SUN SPA & MASSAGE</h1>
        </div>
        <div className='all-lienhe' style={{ display: 'flex' }}>
          <div className="infor">
            <div className="booking-section">
              <h2>BOOKING</h2>
              <p>Để chúng tôi hỗ trợ tốt nhất đến với quý khách, vui lòng liên hệ ngay!</p>
              <form>
                <div className="form-group">
                  <label>Họ và tên *</label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>Số điện thoại *</label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>Email của bạn</label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>Ngày và Giờ  </label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>Bạn đi bao nhiêu người?</label>
                  <select required>
                    <option value="">Chọn số người</option>
                    <option value="1">1 người</option>
                    <option value="2">2 người</option>
                    <option value="3">3 người</option>
                    <option value="4">4 người</option>
                    <option value="5">5 người</option>
                    <option value="6+">Trên 5 người</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Bạn muốn làm dịch vụ gì?</label>
                  <select required>
                    <option value="">Chọn dịch vụ</option>
                    <option value="massage">Massage</option>
                    <option value="spa">Spa</option>
                    <option value="facial">Chăm sóc da mặt</option>
                    <option value="manicure">Làm móng</option>
                    <option value="pedicure">Chăm sóc chân</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Bạn muốn thư giản trong bao lâu? </label>
                  <select required>
                    <option value="">Chọn dịch vụ</option>
                    <option value="massage">30p</option>
                    <option value="spa">60p</option>
                    <option value="facial">90p</option>
                    <option value="manicure">120p</option>
                   
                  </select>
                </div>
                <button type="submit" className="booking-btn">Thử gửi ngay</button>
              </form>
            </div>
          </div>
          <div className="img-lienhe" style={{ width: '100px' }}>
            <img src="https://i.pinimg.com/564x/06/84/34/06843423e0dd6ec70af188fcce85e4ad.jpg" alt="" />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default ContactBooking;
