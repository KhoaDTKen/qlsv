import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Trang Chủ</a></li>
        <li><a href="#">Danh Sách Bất Động Sản</a></li>
        <li><a href="#">Liên Hệ</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
