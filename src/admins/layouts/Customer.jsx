import { useState } from 'react';
import '../styles/Admin.scss';

const CustomerSpaAdmin = () => {
  const [customers] = useState([
    { id: 1, name: 'Nguyễn Văn A', phone: '0123456789', email: 'a@example.com', details: 'Xem chi tiết' },
    { id: 2, name: 'Trần Thị B', phone: '0987654321', email: 'b@example.com', details: 'Xem chi tiết' },
    // Thêm dữ liệu mẫu khác nếu cần
  ]);

  return (
    <div className="main-content"> <div className="customer-spa-admin">
      <h2>Danh sách Khách Hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>

  );
};

export default CustomerSpaAdmin;
