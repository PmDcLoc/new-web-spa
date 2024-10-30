import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.scss';

const ServicesAdmin = () => {

  const [dichvulist, setdichvulist] = useState([])
  const [tendichvu, setTendichvu] = useState('');
  const [mota, setMota] = useState('')
  const [gia, setGia] = useState('')

  //thêm
  async function handledaddichvu() {
    try {
      const res = await axios.post(`http://localhost:3000/api/dv/dichvu`, {
        tenDichVu: tendichvu,
        gia: gia,
        moTa: mota,
      });

      setTendichvu('')
      setGia('')
      setMota('')

      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  //load ra
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

  //xóa
  async function handleDeletedichvu(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/api/dv/dichvu/${id}`);
      setdichvulist(res.data)

      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="main-content">
        <button className="toggle-button" >

        </button>


        <div  >
          <h2>Thêm Dịch Vụ Spa</h2>
          <div className="form-inputs">
            <input
              type="text"
              name="name"
              placeholder="Tên dịch vụ"
              value={tendichvu}
              onChange={(e) => (setTendichvu(e.target.value))}
            />

            <input
              type="number"
              name="price"
              placeholder="Giá dịch vụ (VND)"
              value={gia}
              onChange={(e) => (setGia(e.target.value))}
            />

            <textarea
              name="description"
              placeholder="Mô tả dịch vụ"
              value={mota}
              onChange={(e) => (setMota(e.target.value))}
            ></textarea>
            <input
              type="text"
              name="discount"
              placeholder="Mã giảm giá (nếu có)"
            />
            <input type="file" name="image" accept="image/*" />
            <button id="add-service" className="addnew" onClick={handledaddichvu}>
              Thêm mới
            </button>
          </div>
        </div>



        <h3>Danh sách Dịch Vụ Spa</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên</th>

              <th>Giá</th>

              <th>Mô tả</th>
              <th>Mã giảm giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody id="service-list">
            {dichvulist.map((dv) =>

            (
              <tr key={dv.id}>
                <td>{dv.id}</td>
                <td><img /></td>
                <td>{dv.tenDichVu}</td>
                <td>{dv.gia}</td>
                <td>{dv.moTa}</td>
                <td></td>
                <td className="action-buttons">
                  <button className="edit">Sửa</button>
                  <button className="delete" onClick={() => handleDeletedichvu(dv.id)}>Xóa</button>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ServicesAdmin;
