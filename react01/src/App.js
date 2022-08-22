import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Geral from "./pages/Geral";
import Perguntar from "./pages/Perguntar";
import PerguntaId from "./pages/PerguntaId";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/pergunta" element={<Perguntar />}></Route>

          <Route path="/" element={<Geral />}></Route>

          <Route
            path="/pergunta/:id"
            element={<PerguntaId />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
