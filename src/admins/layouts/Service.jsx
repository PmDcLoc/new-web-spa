import { useState } from 'react';
import '../styles/Admin.scss';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesAdmin = () => {
  const formVariants = {
    hidden: { opacity: 0, y: -20 },  // Ẩn: Mờ dần và đi lên
    visible: { opacity: 1, y: 0 },   // Hiện: Sáng dần và từ trên xuống
  };
  const [formVisible, setFormVisible] = useState(false);
  const [service, setService] = useState({
    name: '',
    category: 'massage',
    price: '',
    duration: '',
    description: '',
    discount: '',
    status: 'active',
    image: null
  });
  const [servicesList, setServicesList] = useState([]);

  const toggleForm = () => {
    setFormVisible(!formVisible);
    // document.body.style.overflow = formVisible ? 'auto' : 'hidden';
  };


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setService((prevService) => ({
      ...prevService,
      [name]: files ? files[0] : value
    }));
  };

  const addService = (e) => {
    e.preventDefault();
    const { name, price, duration, description, image } = service;

    if (!name || !price || !duration || !description || !image) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const newService = {
        id: servicesList.length + 1, // Tạo id tự động cho dịch vụ
        image: e.target.result,
        name,
        category: service.category,
        duration: `${duration} phút`,
        price: `${price} VND`,
        discount: service.discount || 'Không có',
        description,
        status: service.status === 'active' ? 'Hoạt động' : 'Không hoạt động'
      };
      setServicesList((prevList) => [...prevList, newService]);
      resetForm();
    };
    reader.readAsDataURL(image);
  };

  const resetForm = () => {
    setService({
      name: '',
      category: 'massage',
      price: '',
      duration: '',
      description: '',
      discount: '',
      status: 'active',
      image: null
    });
    setFormVisible(false); // Đóng form sau khi thêm dịch vụ
  };

  return (
    <>
      <div className="main-content">
        <button id="toggle-form" className="toggle-button" onClick={toggleForm}>
          {formVisible ? 'x' : '+'}
        </button>

        <AnimatePresence>
          {formVisible && (
            <motion.div
              id="service-form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
            >
              <div id="service-form" className={formVisible ? 'form-visible' : 'form-hidden'}>
                <h2>Thêm Dịch Vụ Spa</h2>
                <div className="form-inputs">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên dịch vụ"
                    value={service.name}
                    onChange={handleChange}
                    required
                  />
                  <select name="category" value={service.category} onChange={handleChange}>
                    <option value="massage">Massage</option>
                    <option value="chăm sóc da">Chăm sóc da</option>
                    <option value="trị liệu">Trị liệu</option>
                    <option value="tắm trắng">Tắm trắng</option>
                  </select>
                  <input
                    type="number"
                    name="price"
                    placeholder="Giá dịch vụ (VND)"
                    value={service.price}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="duration"
                    placeholder="Thời gian thực hiện (phút)"
                    value={service.duration}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Mô tả dịch vụ"
                    value={service.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <input
                    type="text"
                    name="discount"
                    placeholder="Mã giảm giá (nếu có)"
                    value={service.discount}
                    onChange={handleChange}
                  />
                  <input type="file" name="image" accept="image/*" onChange={handleChange} required />
                  <select name="status" value={service.status} onChange={handleChange}>
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Không hoạt động</option>
                  </select>
                  <button id="add-service" className="addnew" onClick={addService}>
                    Thêm mới
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>



        <h3>Danh sách Dịch Vụ Spa</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh</th>
                <th>Tên</th>
                <th>Loại dịch vụ</th>
                <th>Thời gian</th>
                <th>Giá</th>
                <th>Mã giảm giá</th>
                <th>Mô tả</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody id="service-list">
              {servicesList.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td><img src={s.image} alt={s.name} /></td>
                  <td>{s.name}</td>
                  <td>{s.category}</td>
                  <td>{s.duration}</td>
                  <td>{s.price}</td>
                  <td>{s.discount}</td>
                  <td>{s.description}</td>
                  <td>{s.status}</td>
                  <td className="action-buttons">
                    <button className="edit">Sửa</button>
                    <button className="delete">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ServicesAdmin;
