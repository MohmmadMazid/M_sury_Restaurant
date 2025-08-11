import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import NoteFound from "./pages/NoteFound";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* this above route for the home routes and all the other routes comes under this routes  */}
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </Router>
  );
};

export default App;
