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
import { RecuperarSenha } from "./Pages/RecuperarSenha/RecuperarSenha";
import { Usuario } from "./Pages/Usuario/Usuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/conta/*" element={<Usuario />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
