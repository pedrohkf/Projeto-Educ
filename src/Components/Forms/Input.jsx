import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label }) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
      <input className={styles.input} />
    </div>
  );
};
