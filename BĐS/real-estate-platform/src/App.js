import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Listings from './components/Listings';
import PropertyDetails from './components/PropertyDetails';
import CRM from './components/CRM';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
    </Router>
  );
}

export default App;
