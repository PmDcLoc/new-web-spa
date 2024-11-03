import "../../style/footer.scss";
import MapComponent from "../views/MapComponent";

function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="logo-and-social">
                    <img src="../../../public/logo0.png" alt="Logo" className="logo" />
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-col">
                        <h4>Thông tin liên hệ</h4>
                        <ul>
                            <li>Hotline: 0348 727 070</li>
                            <li>Hoạt động: Thứ 2 - Chủ nhật</li>
                            <li>Mở cửa: 8:30 - 22:00</li>
                            <li>Địa chỉ: 05 Lê Quang Hòa, Hòa Xuân, Cẩm Lệ, Đà Nẵng</li>
                            <li>Email: sm.sunspamassage@gmail.com</li>
                        </ul>
                        <h4>Website thành viên</h4>
                        <p> https://www.facebook.com/profile.php?id=100016755930241</p>
                    </div>

                    <div className="footer-col">
                        <h4>Dịch vụ massage tại Sun Spa & Massage</h4>
                        <ul>
                            <li>Dịch vụ massage body</li>
                            <li>Dịch vụ massage foot</li>
                            <li>Dịch vụ massage cổ vai gáy</li>
                            <li>Ngâm tắm lá thuốc người dao đỏ</li>
                        </ul>
                        <h4>Blog tin tức</h4>
                        <ul>
                            <li>Cẩm nang massage</li>
                            <li>Cẩm nang sức khỏe</li>
                            <li>Cẩm nang du lịch</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Chính sách & Điều Khoản</h4>
                        <ul>
                            <li>Điều khoản dịch vụ</li>
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách đổi trả</li>
                            <li>Chính sách giao hàng</li>
                        </ul>
                    </div>

                    <div className="footer-col consult-form">
                        <h4>Tư vấn miễn phí</h4>
                        <form>
                            <input type="text" placeholder="Họ và tên" style={{marginBottom: "20px"}} />
                            <input type="tel" placeholder="Số điện thoại*" />
                            <button type="submit" className="btn-foot"
                             style={{  
                                backgroundColor: '#8d5a3d',
                                color: '#fff',
                                border: 'none' ,
                                borderRadius: '5px',
                                padđing: '10px 20px 10px 20px',
                                marginTop: '10px',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                width: '100%',
                                height: '40px'
                                }}>THƯ GIÃN NGAY</button>
                        </form>
                        <div className="map-section">
                            <h4>Maps</h4>
                            <MapComponent />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
