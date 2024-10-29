import lienh from '../assets/imaage/nenanh.jpg';
import '../style/lienhe.scss';
// import MapComponent from './views/MapComponent';
const ContactBooking = () => {
  return (
    <>
      <img src={lienh} alt="" className='lienhee' />
      <div className="overlaygt"></div>
      <h1 className='lien'>ĐẶT LỊCH NGAY</h1>
      <div className="contact-booking-container">
        {/* <div className="contact-section">
          <h2>CONTACT</h2>
          <h3>SUN SPA</h3>
          <p>Địa chỉ: 269 Núi Thành, Hòa Cường Bắc, Hải Châu, Đà Nẵng, Việt Nam</p>
          <p>Hotline: 0799019899</p>
          <p>Email: chuaspa@gmail.com</p>

          <div className="social-media">
            <h4>FOLLOW US AT</h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <MapComponent />
        </div> */}

        <div className='bokg'>
        <div className="booking-section">
          <h2>Điền thông tin</h2>
          <form>
            <div className="form-group">
              <label>
                <i className="fas fa-user"></i>
                Full name *
              </label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-phone"></i>
                Phone number *
              </label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-envelope"></i>
                Email
              </label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-calendar"></i>
                Select date and time
              </label>
              <input type="datetime-local" />
            </div>

            <div className="menu-options">
              <p>Menu</p>
              <div className="checkbox-group">
                <label><input type="checkbox" /> NECK & SHOULDER</label>
                <label><input type="checkbox" /> BODY</label>
                <label><input type="checkbox" /> AROMA</label>
                <label><input type="checkbox" /> THAI</label>
                <label><input type="checkbox" /> FOOT</label>
              </div>
            </div>

            <div className="time-options">
              <p>Thời gian</p>
              <div className="checkbox-group">
                <label><input type="radio" name="time" /> 60 minutes</label>
                <label><input type="radio" name="time" /> 90 minutes</label>
                <label><input type="radio" name="time" /> 120 minutes</label>
              </div>
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-users"></i>
                How many people are you going?
              </label>
              <input type="number" />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-comments"></i>
                Other requirements
              </label>
              <textarea rows="3"></textarea>
            </div>

            <button type="submit" className="booking-btn">Đặt ngay</button>
          </form>
        </div>
        </div>
      </div>

    </>
  );
};

export default ContactBooking;
