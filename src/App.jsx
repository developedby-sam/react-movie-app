import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
