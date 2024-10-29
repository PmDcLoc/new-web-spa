import gtsp from '../assets/imaage/nenanh.jpg';
import '../style/room.scss';


const Room = () => {
  const images = [
   
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
    'https://i.pinimg.com/564x/fa/60/1b/fa601bea62f56aeae561dbf884d4e184.jpg',
 
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
