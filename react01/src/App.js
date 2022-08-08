import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
