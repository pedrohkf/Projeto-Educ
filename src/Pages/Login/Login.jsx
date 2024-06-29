import React from "react";
import { Routes, Route} from "react-router-dom";
import { RecuperarSenha } from "../RecuperarSenha/RecuperarSenha";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
