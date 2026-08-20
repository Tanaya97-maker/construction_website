import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ResidentialConstruction from './pages/ResidentialConstruction';
import CommercialConstruction from './pages/CommercialConstruction';
import ProjectsPortfolio from './pages/ProjectsPortfolio';
import ProcessPage from './pages/ProcessPage';
import InsightsPage from './pages/InsightsPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/residential-construction-goa" element={<ResidentialConstruction />} />
        <Route path="/services/commercial-construction-goa" element={<CommercialConstruction />} />
        <Route path="/projects" element={<ProjectsPortfolio />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
