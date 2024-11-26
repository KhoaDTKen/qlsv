import React, { useState } from 'react';
import './App.css';
const WelcomeMessage = () => {
 // Sử dụng useState để quản lý state của tên người dùng
 const [name, setName] = useState('');
 const [message, setMessage] = useState('');
 // Hàm mũi tên để xử lý sự kiện nhập tên
 const handleInputChange = (e) => {
 setName(e.target.value);
 };
 // Hàm mũi tên để xử lý sự kiện nhấn nút
 const handleButtonClick = () => {
 setMessage(`Xin chào, ${name}!`);
 };
 return (
 <div style={{ padding: '20px' }}>
 <h1>Sử Dụng Hàm ARROW FUNCITION</h1>
 <input
 type="text"
 placeholder="Nhập tên của bạn"
 value={name}
 onChange={handleInputChange}
 />
 <button onClick={handleButtonClick}>Chào Mừng</button>
 {message && <p>{message}</p>}
 </div>
 );
};
export default WelcomeMessage;