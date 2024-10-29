import '../../styles/Admin.scss';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";

const BillAdmin = () => {
  const invoices = [
    { id: 'HD001', customer: 'Nguyễn Văn A', phone: '0987654321', service: 'Massage body', total: 200000, date: '2024-10-29', status: 'Đã thanh toán' },
    { id: 'HD002', customer: 'Trần Thị B', phone: '0976543210', service: 'Làm tóc', total: 150000, date: '2024-10-29', status: 'Chưa thanh toán' },
    { id: 'HD003', customer: 'Lê Văn C', phone: '0932456789', service: 'Chăm sóc da', total: 300000, date: '2024-10-28', status: 'Đã thanh toán' },
    { id: 'HD004', customer: 'Phạm Văn D', phone: '0901234567', service: 'Gội đầu', total: 100000, date: '2024-10-27', status: 'Đã thanh toán' },
  ];

  const uniqueDates = [...new Set(invoices.map((invoice) => invoice.date))];
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
  const [viewDetail, setViewDetail] = useState(false); // State để theo dõi việc xem chi tiết
  const location = useLocation(); // Lấy thông tin vị trí hiện tại

  // Hóa đơn cho ngày hiện tại
  const currentDate = uniqueDates[currentPage];
  const currentInvoices = invoices.filter((invoice) => invoice.date === currentDate);

  // Chuyển trang
  const goToPage = (newPage) => {
    if (newPage >= 0 && newPage < uniqueDates.length) {
      setCurrentPage(newPage);
    }
  };

  // Kiểm tra xem có quay lại từ trang chi tiết hóa đơn không
  useEffect(() => {
    if (location.state && location.state.fromDetail) {
      // Thực hiện load lại hóa đơn hoặc có thể xử lý gì đó ở đây
      setViewDetail(false); // Reset trạng thái chi tiết
    }
  }, [location.state]); // Chạy khi state thay đổi

  return (
    <>
      <div className="main-content">
        {viewDetail ? (
          <Outlet /> // Hiển thị trang chi tiết hóa đơn nếu viewDetail là true
        ) : (
          <div className="invoice-container">
            <h2>Hóa Đơn Ngày: {currentDate}</h2>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên Khách Hàng</th>
                    <th>Số Điện Thoại</th>
                    <th>Dịch Vụ</th>
                    <th>Tổng Tiền (VND)</th>
                    <th>Trạng Thái</th>
                    <th>Chi Tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.length > 0 ? (
                    currentInvoices.map((invoice) => (
                      <tr key={invoice.id}>
                        <td>{invoice.id}</td>
                        <td>{invoice.customer}</td>
                        <td>{invoice.phone}</td>
                        <td>{invoice.service}</td>
                        <td>{invoice.total.toLocaleString()}</td>
                        <td>
                          <span className={`status ${invoice.status === 'Đã thanh toán' ? 'paid' : 'unpaid'}`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td>
                          <button onClick={() => setViewDetail(true)}>
                            <NavLink to={`hdct`}>Hóa Đơn</NavLink>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Không có hóa đơn cho ngày này.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>
                Ngày trước
              </button>
              <span>Trang {currentPage + 1} / {uniqueDates.length}</span>
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === uniqueDates.length - 1}>
                Ngày sau
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BillAdmin;
