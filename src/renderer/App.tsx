import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Card from '../Components/Card';
import './App.css';

const Hello = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
