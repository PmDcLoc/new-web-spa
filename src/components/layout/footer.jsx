import "../../style/footer.scss";

function Footer() {
    return (
        <div className="ft">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        {/* Thông tin liên hệ */}
                        <div className="footer-col">
                            <h4>Thông tin liên hệ</h4>
                            <ul>
                                <li>Hotline: 0348 727 070</li>
                                <li>Hoạt động: Thứ 2 - Chủ nhật</li>
                                <li>Mở cửa: 8:30 - 22:00</li>
                                <li>Địa chỉ: 05 Lê Quang Hòa, Hòa Xuân, Cẩm Lệ, Đà Nẵng</li>
                                <li>Email: sm.chamspamassage@gmail.com</li>
                            </ul>
                        </div>

                        {/* Dịch vụ massage */}
                        <div className="footer-col">
                            <h4>Dịch vụ massage tại SUN Spa</h4>
                            <ul>
                                <li>Dịch vụ massage body</li>
                                <li>Dịch vụ massage foot</li>
                                <li>Dịch vụ massage cổ vai gáy</li>
                                <li>Ngâm tắm lá thuốc người dao đỏ</li>
                            </ul>
                        </div>

                        {/* Chính sách & Điều Khoản */}
                        <div className="footer-col">
                            <h4>Chính sách & Điều Khoản</h4>
                            <ul>
                                <li>Điều khoản dịch vụ</li>
                                <li>Chính sách bảo mật</li>
                                <li>Chính sách đổi trả</li>
                                <li>Chính sách giao hàng</li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="row">
                      
                        <div className="footer-col">
                          
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-tiktok"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>

                       
                    </div> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
