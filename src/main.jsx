
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import GioiThieu from './components/menu.jsx';
import Room from './components/room.jsx';
import DVCT from './components/dichvu/chitiet/dvct.jsx';
import ContactBooking from './components/lienhe.jsx';
import Checkservect from './components/check.jsx';


import Admin from './admins/admin.jsx';
import ServicesAdmin from './admins/layouts/Service.jsx';
import CustomersAdmin from "./admins/layouts/Customer.jsx";
import Users from "./admins/layouts/User.jsx";
import SettingsAdmin from "./admins/layouts/Sett.jsx";
import BillAdmin from "./admins/layouts/hoadons/Hoadon.jsx";
import HDCTdv from "./admins/layouts/hoadons/chitiethoadon/HoadonChitiet.jsx"


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'gt',
        element: <GioiThieu />
      },
      {
        path: 'room',
        element: <Room />
      },
      {
        path: 'chitiet',
        element: <DVCT />
      },
      {
        path: 'contact',
        element: <ContactBooking />
      },
      {
        path: 'check',
        element: <Checkservect />
      }

    ]
  },
  {
    path: 'admin',
    element: <Admin />,
    children: [
      { path: 'admin', element: <Users /> },
      { path: 'cust', element: <CustomersAdmin /> },
      { path: 'ser', element: <ServicesAdmin /> },
      { path: 'sett', element: <SettingsAdmin /> },
      { path: 'bil', element: <BillAdmin />, 
        children: [
          {path: 'hdct', element: <HDCTdv/>,}
        ],
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
