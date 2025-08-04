import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index.jsx';
import Menu from './menu.jsx';
import Footer from './footer.jsx';
import NavBar from "./navbar.jsx";
import FAQ from "./faq.jsx";
import ScrollToTop from './scrollToTop.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div className="appContainer">
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
