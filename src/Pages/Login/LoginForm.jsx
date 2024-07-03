import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import imgForm from "../../Assets/formIMG.jpeg";
import { Link } from "react-router-dom";
import Eye from "../../Assets/eye.svg?react";
import EyeDisable from "../../Assets/eye-disable.svg?react";

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <form className={styles.content}>
      <div className={styles.login}>
        <div className={styles.backgroundImg}>
          <div className={styles.gradient}></div>
          <img src={imgForm} />
        </div>
        <div className={styles.form}>
          <h1>Login</h1>
          <div className={styles.formEmail}>
            <label htmlFor="email">
              <p>Email</p>
            </label>
            <input id="email" type="email" />
          </div>
          <div className={styles.formPassword}>
            <label htmlFor="password">
              <p>Senha</p>
            </label>
            <div className={styles.inputPassword}>
              <input
                id="password"
                value={password}
                type={visible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className={styles.eye} onClick={() => setVisible(!visible)}>
                {" "}
                {visible ? <Eye /> : <EyeDisable />}
              </div>
            </div>
            <div className={styles.resetPassword}>
              <Link to="/login/recuperarSenha">
                <p id={styles.resetPassword}>Esqueci minha senha</p>
              </Link>
            </div>
          </div>
          <Link to="/account/calendar">
            <button>Entrar</button>
          </Link>
        </div>
      </div>
    </form>
  );
};
