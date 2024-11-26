import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import ComparisonTool from './components/ComparisonTool';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Khám Phá Bất Động Sản Tại Việt Nam</h1>
        <p>Tìm kiếm và sở hữu căn hộ, biệt thự, hay văn phòng thương mại tại các thành phố lớn như Hà Nội, TP.HCM, Đà Nẵng, và nhiều khu vực khác.</p>
        <img 
          src="ảnh2.jpg" 
          alt="Real Estate Vietnam" 
          className="banner-image"
        />
      </header>

      <section className="about-vietnam-realestate">
        <h2>Tại Sao Nên Chọn Bất Động Sản Việt Nam?</h2>
        <p>Việt Nam là một trong những thị trường bất động sản phát triển nhanh nhất Đông Nam Á, với tiềm năng lớn từ các dự án căn hộ cao cấp, biệt thự nghỉ dưỡng ven biển, và văn phòng cho thuê.</p>
        <img 
          src="ảnh4.jpg" 
          alt="Vietnam Apartment"
          className="about-image"
        />
        <p>Thị trường bất động sản Việt Nam cung cấp nhiều lựa chọn phong phú với mức giá đa dạng, từ các căn hộ giá rẻ đến các dự án cao cấp với các tiện ích hiện đại như trung tâm thương mại, khu vui chơi giải trí, và trường học quốc tế.</p>
      </section>

      <div className="main-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PropertyList properties={properties} searchTerm={searchTerm} />
        <ComparisonTool />
      </div>

      <section className="popular-locations">
        <h2>Những Địa Điểm Bất Động Sản Nổi Bật</h2>
        <div className="location-grid">
          <div className="location-item">
            <img src="ảnh1.jpg" alt="Hà Nội" />
            <h3>Hà Nội</h3>
            <p>Thủ đô với nền văn hóa phong phú và hệ thống giao thông phát triển, nơi bạn có thể tìm kiếm các dự án căn hộ và biệt thự sang trọng.</p>
          </div>
          <div className="location-item">
            <img src="ảnh1.jpg" alt="TP.HCM" />
            <h3>TP.HCM</h3>
            <p>Thành phố lớn nhất cả nước, trung tâm kinh tế năng động với nhiều dự án nhà ở cao cấp và văn phòng thương mại.</p>
          </div>
          <div className="location-item">
            <img src="ảnh1.jpg" alt="Đà Nẵng" />
            <h3>Đà Nẵng</h3>
            <p>Thành phố ven biển với nhiều dự án nghỉ dưỡng đẳng cấp, biệt thự ven biển và căn hộ view biển tuyệt đẹp.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Bất Động Sản Việt Nam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
