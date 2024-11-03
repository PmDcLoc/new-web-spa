import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../style/map.scss'
// Fix icon marker của Leaflet trong React (vì mặc định không load icon đúng cách)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  // Vị trí Đà Nẵng (có thể thay đổi thành vị trí cụ thể)
  const position = [16.0544, 108.2022]; // Tọa độ của Đà Nẵng

  return (
    <MapContainer className="maps" center={position} zoom={13} style={{ width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Địa chỉ: 219 Nguyễn Sinh Sắc, Liên Chiểu, Đà Nẵng
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
