import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import SvgCalendar from "../../Assets/calendar.svg?react";
import SvgStudent from "../../Assets/student.svg?react";
import SvgPersons from "../../Assets/persons.svg?react";
import SvgMoney from "../../Assets/money.svg?react";
import SvgBank from "../../Assets/bank.svg?react";
import SvgDoor from "../../Assets/door.svg?react";
import Logo from "../../Assets/LogoSistema.png";

export const Menu = () => {
  return (
    <div className={styles.content}>
      <nav className={styles.menulateralContent}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" id={styles.logoSistema} />
        </div>
        <div>
          <ul>
            <Link to="/account/calendar">
              <li>
                <SvgCalendar className={styles.svg} />
                Calendar
              </li>
            </Link>

            <hr size="3" color="#303030" width="80%" />

            <Link to="/account/students">
              <li>
                <SvgStudent className={styles.svg} id={styles.alunos} />
                Students
              </li>
            </Link>

            <Link to="/account/class">
              <li>
                <SvgPersons className={styles.svg} id={styles.turmas} />
                Class
              </li>
            </Link>
            <hr size="3" color="#303030" width="80%" />
            <Link to="/account/payments">
              <li>
                <SvgMoney className={styles.svg} id={styles.money} />
                Payments
              </li>
            </Link>
            <Link to="/account/finance">
              <li>
                <SvgBank className={styles.svg} />
                Finance
              </li>
            </Link>
            <hr size="3" color="#303030" width="80%" />
            <Link to="/">
              <li id={styles.logout}>
                <SvgDoor className={styles.svg} />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
