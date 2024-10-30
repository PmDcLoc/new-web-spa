import { Outlet, useLocation } from 'react-router-dom';
import DashboardsAdmin from './layouts/Dashboard.jsx';
import Users from './layouts/User.jsx';

const Admin = () => {
  const location = useLocation();
  const isOutletActive = location.pathname !== '/admin'; // Kiểm tra xem đường dẫn hiện tại có phải là trang chính không

  return (
    <>
      <DashboardsAdmin />
      {!isOutletActive && <Users />} {/* Ẩn Users khi Outlet đang hiển thị */}
      <Outlet />
    </>
  );
};

export default Admin;
