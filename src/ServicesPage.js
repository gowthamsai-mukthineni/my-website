import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function WebDevelopment() {
  return <p>Web Development Services offered.</p>;
}

function MobileDevelopment() {
  return <p>Mobile Development Services offered.</p>;
}

function Consulting() {
  return <p>Consulting Services offered.</p>;
}

function ServicesPage() {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li><Link to="web-development">Web Development</Link></li>
        <li><Link to="mobile-development">Mobile Development</Link></li>
        <li><Link to="consulting">Consulting</Link></li>
      </ul>
      <Routes>
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="mobile-development" element={<MobileDevelopment />} />
        <Route path="consulting" element={<Consulting />} />
      </Routes>
    </div>
  );
}

export default ServicesPage;
