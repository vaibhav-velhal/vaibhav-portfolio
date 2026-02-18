import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages//Home/Home';
import About from './pages/About/About';
import Footer from './component/Footer/Footer';

function App() {

  return (
    <>
      <Router>
        <div className="app-container">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
