import gtsp from '../assets/imaage/nenanh.jpg';
import  { useEffect } from 'react';
import '../style/room.scss';


const Room = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const images = [
   
    'https://nhadep.pro.vn/wp-content/uploads/2022/01/mau-spa-goi-dau-duong-sinh-thu-gian.jpg',
    'https://www.deco-crystal.com/wp-content/uploads/2022/12/image13-1.jpg',
    'https://cdn.diemnhangroup.com/noithatdiemnhan/2023/11/cong-ty-chuyen-thiet-ke-spa-2.jpeg',
    'https://kientruc.vn/wp-content/uploads/2022/11/cong-ty-thiet-ke-spa-o-ha-noi-2.jpg',
    'https://inhousedesign.vn/wp-content/uploads/2021/06/xac-dinh-bo-cuc-noi-that-1-e1630886159938.jpg',
    'https://maihanspa.com/ino_upload/source/50%20mau%20spa/spa%20mini%20tai%20nha.jpg',
    'https://www.deco-crystal.com/wp-content/uploads/2022/12/image15-1.jpg',
    'https://noithat4mua.com/wp-content/uploads/2018/09/thiet-ke-spa-mini-dep-1.jpg',
    'https://befurni.com/bestay/uploads/files/Phong%20d%E1%BB%8Bch%20v%E1%BB%A5%20spa%2007.jpg',
    'https://trondecor.com/wp-content/uploads/2021/07/tron-decor-thiet-ke-noi-that-spa-diva-30-1024x787.jpg',
    'https://noithathuonglinh.com/wp-content/uploads/2021/12/mau-spa-dep-03.jpg',
    'https://dungcuthammytriviet.com/wp-content/uploads/2022/02/thiet-ke-spa-don-gian-1.jpg',
 
  ];

  return (
    <>
    <img src={gtsp} alt="" className='gtsp' />
    <div className="overlaygt"></div>
    <h1 className='tt7b'>KHU PHÒNG</h1>
    <div className="image-gallery-container">
      {images.map((image, index) => (
          <div key={index} className="image-item">
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}
    </div>
      </>
  );
};

export default Room;
