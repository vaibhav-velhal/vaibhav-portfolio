import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultTemplate from "./DefaultTemplate";
import Home from "./pages//Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        <Route
          path="*"
          element={
            <div className="container text-center">
              <h2 className="mt-4">404 - No page found</h2>
              <a href="/">Return to Home</a>
            </div>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
