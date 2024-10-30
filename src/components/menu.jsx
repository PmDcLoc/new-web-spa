import gtsp from '../assets/imaage/nenanh.jpg';
import  { useEffect } from 'react';
import '../style/menu.scss';

const GioiThieu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>  
     <img src={gtsp} alt="" className='gtsp' />
     <div className="overlaygt"></div>
     <h1 className='sayhi'>XIN CHÀO</h1>
      <div className="process-container">
        
        <div className="process-content">
          <ul>
          <h2 className="process-title">Quy trình Massage tại SUN SPA</h2>
            <li>Người bệnh nằm sấp người trên mặt phẳng, KTV tiến hành massage, xoa bóp, bấm huyệt<br/> vào các huyệt đạo vào vị trí đau nhức, kéo dãn các cơ giúp cơ thể thả lỏng, linh hoạt các khớp.</li>
            <li>Người bệnh đổi tư thế nằm ngửa tiếp tục thư giãn bằng các động tác xoa nhẹ, day, massage,<br/> ấn huyệt để giải tỏa stress, căng thẳng.</li>
            <li>Tiếp theo là quá trình kết hợp chườm thảo dược, đá nóng. Sử dụng các kỹ thuật miết, vỗ, day,<br/> ấn huyệt vào các khối cơ để tinh chất dễ dàng thẩm thấu, cơ thể được giãn nở nhanh hơn.</li>
            <li>Kết thúc quy trình bằng các động tác massage nhẹ nhàng, bấm huyệt vùng đầu, mặt, đắp mặt<br/> nạ với mục đích thư giãn tối đa.</li>
          </ul>
          <div className="process-image">
            <img src="https://herbalspa.vn/data/images/massage-thai-danh-cho-nam%20(SpaBooking%20Inside).webp" />
          </div>
        </div>
      </div>
     <div className="massage-container">
      <div className="image-section">
        <img src="https://www.elle.vn/wp-content/uploads/2022/09/22/495756/bi-quyet-lam-dep-cua-yoona-double-cleasing-1.jpg" />
      </div>
      <div className="text-section">
        <h2>Sau khi sử dụng dịch vụ massage tại SUN SPA & Massage Đà Nẵng</h2>
        <ul>
          <li>Nới lỏng cơ và khớp, hỗ trợ trị liệu viêm khớp, đau thần kinh tọa, tăng cường sự linh hoạt.</li>
          <li>Kích thích trực tiếp lên các tế bào của da giúp sản sinh ra các nội tiết tố, làm giãn mạch máu.</li>
          <li>Kích thích sự giải phóng hormone thư giãn như endorphin và serotonin giúp giảm căng thẳng, lo lắng và stress trong cơ thể và tâm trí.</li>
          <li>Tăng cường tuần hoàn máu lưu thông khí huyết. Cải thiện hệ tiêu hóa và hô hấp.</li>
          <li>Tăng cường sự thư thái, cải thiện giấc ngủ ngon và sâu hơn.</li>
          <li>Tăng cường hệ miễn dịch, giúp cơ thể đấu tranh với bệnh tật và tăng cường sức đề kháng.</li>
          <li>Hỗ trợ giảm ốm, làm đẹp da.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default GioiThieu;
