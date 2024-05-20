import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataPengukuran from './components/DataPengukuran';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; 
import Beranda from './components/BerandaContent'; 
import GrafikPengukuran from './components/GrafikPengukuran'; 

function App() {
  const [activeItem, setActiveItem] = useState('Beranda');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <Router>
      <div>
        <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
        <Navbar />
        {activeItem === 'Beranda' && <Beranda />}

        <Routes>
        <Route activeItem path="/datapengukuran" element={<DataPengukuran />} />
        </Routes>
        <Routes>
        <Route activeItem path="/grafikpengukuran" element={<GrafikPengukuran />} />
        </Routes>
        
      </div>
    </Router>
  );
}


export default App;