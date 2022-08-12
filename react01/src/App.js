import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Geral from "./pages/Geral";
import Perguntar from "./pages/Perguntar";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Perguntar />}></Route>
        </Routes>
        <Routes>
          <Route path="/geral" element={<Geral />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
