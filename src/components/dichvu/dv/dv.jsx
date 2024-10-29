import ListDv from "../listdv/listdv"
import "./dv.scss"
import nenanh from '../../../assets/imaage/nenanh.jpg';

function Dichvu() {
    return (
       <>
        <img src={nenanh} alt="" className='anhnendv' />
                <div className="overlay"></div>
                <h1 className='dvtb'>DỊCH VỤ CỦA CHÚNG TÔI</h1>
        <div className="dv">
            <div className="dv-text">
                <p> Trải nghiệm không gian thư giãn, tinh tế với
                dịch vụ cao cấp tại Sun Spa</p>
                <div className="text-dv">
                    
                </div>
            </div>
            <div className="dv-container">
                <div className="dv-main">
                    <h2>Bảng giá dịch vụ</h2>
                </div>
                <div className="list">
                    <ListDv />

                </div>

            </div>
        </div>
       </>
    )
}


export default Dichvu;