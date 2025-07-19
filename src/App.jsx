import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index.jsx';
import Menu from './menu.jsx';
import Footer from './footer.jsx'
import './App.css';

function App() {
  return (
    <>
      <div className="appContainer">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/faq" element={<FAQ />} /> */}
          </Routes>
          <Footer />

        </Router>
      </div>
    </>


  );
}

export default App;
