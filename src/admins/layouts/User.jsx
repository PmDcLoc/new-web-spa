
import '../styles/Admin.scss';

  

const UserAdmin = () => {
    const stats = {
        revenue: 1500000, // Doanh thu tháng
        customers: 120,    // Số khách hàng
        visitors: 250,     // Số người truy cập hôm nay
    };

    return (
      <div className="main-content">
        <div className="dashboard-admin">
            <h2>Sir Mr.t Lò Vanh Nhật</h2>
            <div className="stats">
                <div className="stat-card">
                    <h3>Doanh thu tháng</h3>
                    <p>{stats.revenue.toLocaleString()} VND</p>
                </div>
                <div className="stat-card">
                    <h3>Số khách hàng</h3>
                    <p>{stats.customers}</p>
                </div>
                <div className="stat-card">
                    <h3>Số người truy cập hôm nay</h3>
                    <p>{stats.visitors}</p>
                </div>
            </div>

            <div className="additional-info">
                <h3>Thông tin bổ sung</h3>
                <p>Danh sách các dịch vụ mới, thông tin khuyến mãi, và các thông tin khác có thể hiển thị ở đây.</p>
                {/* Bạn có thể thêm các thành phần khác như biểu đồ, danh sách dịch vụ mới, v.v. */}
            </div>
        </div>
        </div>
    );
};

export default UserAdmin;

