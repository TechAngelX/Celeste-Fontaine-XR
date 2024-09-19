// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CelesteFontaine from "./components/CelesteFontaine";

import "./styles/App.css";
// Import views lazily
const HomeView = lazy(() => import("./views/Home"));
// ... (other lazy imports)

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
              <Route exact path="/" element={<HomeView />} />
              <Route path="/scrollmagic" element={<CelesteFontaine />} /> {/* Updated path */}
              {/* Other routes */}
            </Routes>
          </Suspense>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
