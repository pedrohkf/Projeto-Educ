import React from "react";
import styles from "./Login.module.css";
import { Routes, Route} from "react-router-dom";
import { RecuperarSenha } from "../RecuperarSenha/RecuperarSenha";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className={styles.background}>
      <Routes>
        <Route path="recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
