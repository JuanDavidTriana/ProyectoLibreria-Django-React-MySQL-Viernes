import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LibroDetail from './pages/LibroDetail';
import LibroList from './pages/LibroList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/libros" element={<LibroList />}/>
        <Route path="/libro" element={<LibroDetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
