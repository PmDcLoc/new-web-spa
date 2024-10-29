import "./HDCT.scss";
import { useNavigate } from 'react-router-dom';

const HDCTdv = () => {
  const navigate = useNavigate();

  // Dữ liệu hóa đơn (giả lập)
  const invoice = {
    id: 'HD002',
    customer: 'Trần Thị B',
    phone: '0976543210',
    service: 'Làm tóc',
    total: 150000,
    date: '2024-10-29',
    status: 'Chưa thanh toán',
    paymentMethod: 'Tiền mặt',
  };

  const handleBackClick = () => {
    navigate("/admin/bil", { state: { fromDetail: true } }); // Điều hướng về trang hóa đơn và gửi trạng thái
  };

  return (
    <div className="invoice-detail-container">
      <div className="invoice-header">
        <h2>Chi Tiết Hóa Đơn: {invoice.id}</h2>
      </div>
      <div className="invoice-body">
        <div className="customer-info">
          <p><strong>Khách hàng:</strong> {invoice.customer}</p>
          <p><strong>Số điện thoại:</strong> {invoice.phone}</p>
        </div>
        <div className="service-info">
          <p><strong>Dịch vụ:</strong> {invoice.service}</p>
          <p><strong>Tổng tiền:</strong> {invoice.total.toLocaleString()} VND</p>
          <p><strong>Phương thức thanh toán:</strong> {invoice.paymentMethod}</p>
          <p><strong>Trạng thái:</strong> <span className={`status ${invoice.status === 'Đã thanh toán' ? 'paid' : 'unpaid'}`}>{invoice.status}</span></p>
          <p><strong>Ngày thanh toán:</strong> {invoice.date}</p>
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Quay lại Hóa Đơn</button>
    </div>
  );
};

export default HDCTdv;
