import { useState } from 'react';
import '../styles/Admin.scss'; // Import file SCSS riêng

const Settings = () => {
    const [theme, setTheme] = useState('');

    const handleThemeChange = (season) => {
        switch (season) {
            case 'spring':
                setTheme('spring');
                break;
            case 'summer':
                setTheme('summer');
                break;
            case 'autumn':
                setTheme('autumn');
                break;
            case 'winter':
                setTheme('winter');
                break;
            default:
                setTheme('');
        }
    };

    return (

        <div className="main-content">
        <div className={`settings-container ${theme}`}>
            <h2>Cài Đặt Giao Diện</h2>
            <div className="theme-selection">
                <button onClick={() => handleThemeChange('spring')}>Xuân</button>
                <button onClick={() => handleThemeChange('summer')}>Hè</button>
                <button onClick={() => handleThemeChange('autumn')}>Thu</button>
                <button onClick={() => handleThemeChange('winter')}>Đông</button>
            </div>
            <div className="logout">
                <button>Đăng Xuất</button>
            </div>
        </div>
        </div>
    );
};

export default Settings;
