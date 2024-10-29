import { Outlet } from 'react-router-dom';
import DashboardsAdmin from './layouts/Dashboard.jsx';


const Admin = () => (
    <>
    <DashboardsAdmin/>
    <Outlet />
    </>
   

);

export default Admin;
