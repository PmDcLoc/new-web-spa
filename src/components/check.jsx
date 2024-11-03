import { useState, useEffect } from 'react';
import '../style/check.scss';
import nenanh from '../assets/imaage/anhnen.jpg'

const Checkservect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [phone, setPhone] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 11) {
            setPhone(input);
        }
    };

    return (
        <>
                 <img src={nenanh} alt="" className="anhnen" />
            <div className="overlay"></div>
            <div className="order-lookup-container">
                <h1 className="order-lookup-title">Tra cứu đơn hàng</h1>
                <div className="input-group">
                    <div className="phone-input-wrapper">
                        <span className="phone-icon">📞</span>
                        <input
                            type="text"
                            className="phone-input"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
                    <button className="search-button">Tìm kiếm</button>
                </div>
            </div>
            <div className="order-table-container">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SDT</th>
                            <th>Dịch vụ</th>
                            <th>Ngày hẹn</th>
                            <th>Giá tiền</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>1</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>2</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {/* Add table rows here */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Checkservect;
