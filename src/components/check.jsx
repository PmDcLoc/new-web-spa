import trac from '../assets/imaage/nenanh.jpg';
import { useState } from 'react';
import  { useEffect } from 'react';
import '../style/check.scss';
// import MapComponent from './views/MapComponent';
const Checkservect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const data = [
        {
            user: "Lò Vanh Nhật",
            sdt: "012345678910",
            lichSuDat: [
                {
                    ngayThangNam: "2024-10-20",
                    soNguoi: 2,
                    soDichVu: 3,
                    ngayDat: "2024-10-18",
                    trangThai: "Hoàn thành",
                    tongSoTien: "500,000 VNĐ",
                    thanhToan: "Đã thanh toán tiền mặt",
                    hoiVien: "Có",
                },
                {
                    ngayThangNam: "2024-09-15",
                    soNguoi: 1,
                    soDichVu: 2,
                    ngayDat: "2024-09-13",
                    trangThai: "Đã hủy",
                    tongSoTien: "không thanh toán",
                    thanhToan: "X",
                    hoiVien: "có",
                },
            ],
        },
    ];

    //----------------------------

    const [phone, setPhone] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        // Chỉ cho phép nhập số và giới hạn tối đa 10-11 ký tự
        if (/^\d*$/.test(input) && input.length <= 11) {
            setPhone(input);
        }
    };

    return (
        <>
            <img src={trac} alt="" className='tracuu' />
            <div className="overlaygt"></div>
            <h1 className='tradv'>XEM DỊCH VỤ ĐÃ SỬ DỤNG</h1>

            <div className='farca'>
                <div className='farcan'>
                    <input
                        type="text"
                        id="phoneInput"
                        className="phone-input"
                        value={phone}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                    />
                    <input type="text" className='nhapten' placeholder='Nhập họ và tên' />
                    <button>TRA CỨU</button>
                </div>
                <div className="farcab">
                    <h2>Anh:</h2>
                    {data.map((item, index) => (
                        <h1 key={index} className="heading">{item.user}</h1>
                    ))}

                    <strong className="tdsdt">SĐT:</strong>
                    {data.map((item, index) => (
                        <p key={index}>{item.sdt}</p>
                    ))}

                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>Ngày Tháng Năm</th>
                                <th>Số Người</th>
                                <th>Số Dịch Vụ</th>
                                <th>Ngày Đặt</th>
                                <th>Trạng Thái</th>
                                <th>Tổng Số Tiền</th>
                                <th>Thanh Toán</th>
                                <th>Hội Viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) =>
                                item.lichSuDat.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.ngayThangNam}</td>
                                        <td>{order.soNguoi}</td>
                                        <td>{order.soDichVu}</td>
                                        <td>{order.ngayDat}</td>
                                        <td>{order.trangThai}</td>
                                        <td>{order.tongSoTien}</td>
                                        <td>{order.thanhToan}</td>
                                        <td>{order.hoiVien}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
};

export default Checkservect;
