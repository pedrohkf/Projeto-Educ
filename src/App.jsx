import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./Pages/Menu/Menu";
import { Calendar } from "./Pages/Calendar/Calendar";
import { Alunos } from "./Pages/Alunos/Alunos";
import { Turmas } from "./Pages/Turmas/Turmas";
import { Pagamentos } from "./Pages/Pagamentos/Pagamentos";
import { Financas } from "./Pages/Financas/Financas";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Login />} />
          <Route element={<Menu />}>
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/pagamentos" element={<Pagamentos />} />
            <Route path="/financas" element={<Financas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
