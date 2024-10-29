import { NavLink } from "react-router-dom";
import {  useState } from "react";

import '../styles/Admin.scss';

const DashboardsAdmin = () => {
    const [nab] = useState(false);

    const activebar = {
      backgroundColor: "#002b30", // Màu nền khi active
      color: "#fff700", // Màu chữ trên nền
  };


    return (
        <nav className={`sidebar ${nab ? 'navb' : ''}`}>
            <h2>SUN SÀ PÀAAAA</h2>
            <ul>
                <li><NavLink className="nank" style={({ isActive }) => isActive ? activebar : {}} to='admin'>Dashboard</NavLink></li>
                <li><NavLink className="nank" style={({ isActive }) => isActive ? activebar : {}} to='cust'>Khách Hàng</NavLink></li>
                <li><NavLink className="nank" style={({ isActive }) => isActive ? activebar : {}} to='ser'>Dịch Vụ</NavLink></li>
                <li><NavLink className="nank" style={({ isActive }) => isActive ? activebar : {}} to='sett'>Cài Đặt</NavLink></li>
                <li><NavLink className="nank" style={({ isActive }) => isActive ? activebar : {}} to='bil'>Hóa Đơn</NavLink></li>
            </ul>
        </nav>
    );
};

export default DashboardsAdmin;
