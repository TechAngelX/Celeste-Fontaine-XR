import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CelesteFontaine from "./components/CelesteFontaine"; // Import the component
import NotFound from "./views/pages/404"; // Correct import for NotFound


import "./styles/App.css";

// Import views lazily (if you still want to keep the HomeView)
const HomeView = lazy(() => import("./views/Home"));

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <TopMenu />
                <Suspense
                    fallback={<div className="text-white text-center mt-3">Loading...</div>}
                >
                    <Routes>
                        <Route exact path="/" element={<CelesteFontaine />} />
                        <Route path="/scrollmagic" element={<CelesteFontaine />} />
                        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
                    </Routes>
                </Suspense>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
