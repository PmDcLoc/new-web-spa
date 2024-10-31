import './listdv.scss';
import { useEffect, useState } from 'react';
// import DVCT from '../chitiet/dvct';
import axios from 'axios';

function ListDv() {
    const [dichvulist, setdichvulist] = useState([])

    // Tạo trạng thái riêng biệt cho mỗi thẻ dịch vụ
    const [selectedService, setSelectedService] = useState(null);

    const handleToggle = (service) => {
        // Chỉ mở phần chi tiết của dịch vụ được click
        setSelectedService(selectedService === service ? null : service);
    };

    async function handledichvu() {
        try {
            const res = await axios.get(`http://localhost:3000/api/dv/dichvu`);
            setdichvulist(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handledichvu();
    }, [])

    return (
        <div className="service-container">
            {dichvulist.map((dv) => (
                <div className="service-card" key={dv.id}>
                    <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                    <div className="service-content">
                        <h3> {dv.tenDichVu} </h3>
                        <p> Giá :{dv.gia} VNĐ</p>
                        <hr />

                        <hr />
                        <div className="service-buttons">
                            <button className="btn-call">Gọi ngay</button>
                            <button className="btn-book" onClick={() => handleToggle(dv.id)}>Mô tả</button>
                        </div>
                    </div>
                    {selectedService === dv.id && <p> Mô tả : {dv.moTa}</p>}
                </div>
            )
            )}
            {/* <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/a6/75/43/a675438eb07c4ccd17b225815cd38a78.jpg" alt="Massage thân hình" />
                <div className="service-content">
                    <h3>Thân hình</h3>
                    <p>(75 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <p>(90 phút) 350.000đ / 15 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Thân hình')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Thân hình' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/a6/75/43/a675438eb07c4ccd17b225815cd38a78.jpg" alt="Massage hương thơm" />
                <div className="service-content">
                    <h3>Hương thơm</h3>
                    <p>(60 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <p>(90 phút) 350.000đ / 15 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Hương thơm')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Hương thơm' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div>
            <div className="service-card">
                <img src="https://i.pinimg.com/564x/45/2e/97/452e97514fa9d7d0221f74a2b32316d9.jpg" alt="Massage chân" />
                <div className="service-content">
                    <h3>Chân</h3>
                    <p>(60 phút) 250.000đ / 11 đô la</p>
                    <hr />
                    <p>(90 phút) 300.000đ / 13 đô la</p>
                    <hr />
                    <div className="service-buttons">
                        <button className="btn-call">Gọi ngay</button>
                        <button className="btn-book" onClick={() => handleToggle('Chân')}>Đặt phòng</button>
                    </div>
                </div>
                {selectedService === 'Chân' && <DVCT />}
            </div> */}
        </div>
    );
}

export default ListDv;
