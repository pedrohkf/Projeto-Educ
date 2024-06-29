import React from "react";
import styles from "./Usuario.module.css";
import { Route, Routes } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import { Alunos } from "../Alunos/Alunos";
import { Turmas } from "../Turmas/Turmas";
import { Pagamentos } from "../Pagamentos/Pagamentos";
import { Financas } from "../Financas/Financas";
import { Menu } from "../Menu/Menu";

export const Usuario = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Routes>
        <Route path="calendario" element={<Calendar />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="turmas" element={<Turmas />} />
        <Route path="pagamentos" element={<Pagamentos />} />
        <Route path="financas" element={<Financas />} />
      </Routes>
    </div>
  );
};
