
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/home/index.jsx";
import Details from "./pages/details/index.jsx";
import NotFound from "./pages/not_found/index.jsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      
      <Route path="/" element={<Home />} />
      
    
      <Route path="/minha-app" element={<Home />} />

      
      <Route path="/minha-app/details/:id" element={<Details />} />
      
    
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRoutes />
);
