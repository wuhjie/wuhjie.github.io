import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Work from './pages/Work';
import Thoughts from './pages/Thoughts';
import ThoughtDetail from './pages/ThoughtDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:id" element={<ThoughtDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
