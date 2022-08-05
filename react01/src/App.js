import React from "react";
import Perguntar from "./pages/Perguntar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ height: '100%', width: 'auto' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Perguntar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
