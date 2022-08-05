import Perguntar from "./pages/Perguntar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Perguntar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
