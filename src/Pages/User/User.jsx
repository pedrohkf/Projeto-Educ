import React from "react";
import styles from "./User.module.css";
import { Route, Routes } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import { Students } from "../Students/Students";
import { Class } from "../Class/Class";
import { Payments } from "../Payments/Payments";
import { Finance } from "../Finance/Finance";
import { Menu } from "../Menu/Menu";

export const User = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Routes>
        <Route path="calendar" element={<Calendar />} />
        <Route path="students" element={<Students />} />
        <Route path="class" element={<Class />} />
        <Route path="payments" element={<Payments />} />
        <Route path="finance" element={<Finance />} />
      </Routes>
    </div>
  );
};
