import React from 'react';
import './ComparisonTool.css';

function ComparisonTool() {
  return (
    <div className="comparison-tool">
      <h2>So Sánh Bất Động Sản</h2>
      <p>Chọn các bất động sản để so sánh các đặc điểm của chúng.</p>
      <div className="comparison-grid">
        <div className="comparison-item">
          <h3>Bất Động Sản 1</h3>
          <p>Đặc điểm: Mô tả chi tiết về bất động sản 1.</p>
          <button className="compare-button">Chọn</button>
        </div>
        <div className="comparison-item">
          <h3>Bất Động Sản 2</h3>
          <p>Đặc điểm: Mô tả chi tiết về bất động sản 2.</p>
          <button className="compare-button">Chọn</button>
        </div>
        <div className="comparison-item">
          <h3>Bất Động Sản 3</h3>
          <p>Đặc điểm: Mô tả chi tiết về bất động sản 3.</p>
          <button className="compare-button">Chọn</button>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTool;
