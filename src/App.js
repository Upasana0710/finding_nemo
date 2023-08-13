
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import React from "react";
import './Components/FoundCard';
import FoundPage from './pages/FoundPage';
import LostPage from './pages/LostPage';
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <div className="screen">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Founditems" element={<FoundPage />}/> 
            <Route path="Lostitems" element={<LostPage />}/> 
        </Routes>
        </Router>
    </div>
  )}


export default App;
