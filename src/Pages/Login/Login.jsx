import React from 'react';
import styles from "./Login.module.css"
import { Input } from '../../Components/Forms/Input';

export const Login = () => {
  return (
    <div className={styles.content}>
        <div className={styles.login}> 
          <Input label="Email" />
          <Input label="Senha" />
        </div>
    </div>
  )
}
