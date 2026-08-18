import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GradientBlur from './components/effects/GradientBlur';


function DefaultTemplate() {
    return(
        <>
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
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default DefaultTemplate;