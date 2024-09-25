import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import './index.css'; // Import your CSS
import Home from './components/Home';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
