import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import logoweb from '../../assets/imaage/logo0.png';
import '../../style/navbar.scss'

function Navbar() {

    const [nab, setNab] = useState(false)

    const activebar = {
        color: "#D3B5A3",
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setNab(true) : setNab(false)
        })
    }, [])
    return (
        <nav className={`container ${nab ? 'navb' : ''}`} style={{}} >

            <ul className='menu'>
            <div><img src={logoweb} alt="Logo" /></div>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/'>TRANG CHỦ  </NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/about'> DỊCH VỤ </NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/gt'> GIỚI THIỆU</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/room'>KHU PHÒNG</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/contact'>LIÊN HỆ</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/check'>TRA CỨU</NavLink></li>
            </ul>
            <div className="search">
                <div className="box">
                    <input type="text" placeholder="Tìm kiếm" />
                    <button><SearchIcon /></button>
                </div>
            </div>
            <div className="langue">
                <button><LanguageIcon /></button>
            </div>

        </nav >
    )
}



export default Navbar;