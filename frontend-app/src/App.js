import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AutorPage from './pages/AutorPages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
