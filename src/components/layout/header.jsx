import { Link } from "react-router-dom";
import "../../style/header.scss"

function Header() {
    return (

        <div className="content">
            <div className="text">
                
                <h2> TẨY DA CHẾT</h2>
                <p> VỚI DỊCH VỤ PEEL WHITE</p>
                <div className="sale"><span> ƯU ĐÃI CHỈ VỚI </span></div>
                <h3>
                    359K
                </h3>

                <Link>Đặt Lịch Ngay</Link>
            </div>

        </div>


    )
}



export default Header;