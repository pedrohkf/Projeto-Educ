import React from "react";
import styles from "./Login.module.css";
import { Routes, Route} from "react-router-dom";
import { RecoverPassword } from "../RecoverPassword/RecoverPassword";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className={styles.background}>
      <Routes>
        <Route path="recoverPassword" element={<RecoverPassword />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
