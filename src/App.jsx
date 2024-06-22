import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./Components/User/Menu";
import { Calendar } from "./Components/Calendar/Calendar";
import { Alunos } from "./Components/Alunos/Alunos";
import { Turmas } from "./Components/Turmas/Turmas";
import { Pagamentos } from "./Components/Pagamentos/Pagamentos";
import { Financas } from "./Components/Financas/Financas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/Calendario" element={<Calendar />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/financas" element={<Financas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
