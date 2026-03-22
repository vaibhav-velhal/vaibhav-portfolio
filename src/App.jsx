import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages//Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import GradientBlur from './components/effects/GradientBlur';

function App() {

  return (
    <>
      <Router>
        <div className="app-container" style={{ position: "relative" }}>

          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <GradientBlur className="w-100" />
          </div>

          <header style={{ position: "relative", zIndex: 10 }}>
            <Navbar />
          </header>
          <main  style={{ position: "relative", zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
