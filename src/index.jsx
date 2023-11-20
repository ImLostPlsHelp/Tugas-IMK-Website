import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./screens/Home";
import { HomeLoggedIn } from "./screens/HomeLoggedIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<HomeLoggedIn />} />
      </Routes>
    </Router>
  );
};

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App />);
