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
      <div className={styles.menulateral}>
        <nav className={styles.menulateralContent}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo" id={styles.logoSistema} />
          </div>
          <div>
            <ul>
              <Link to="/conta/calendario">
                <li>
                  <SvgCalendar className={styles.svg} />
                  Calendário
                </li>
              </Link>

              <hr size="3" color="#303030" width="80%" />

              <Link to="/conta/alunos">
                <li>
                  <SvgStudent className={styles.svg} id={styles.alunos} />
                  Alunos
                </li>
              </Link>

              <Link to="/conta/turmas">
                <li>
                  <SvgPersons className={styles.svg} id={styles.turmas} />
                  Turmas
                </li>
              </Link>
              <hr size="3" color="#303030" width="80%" />
              <Link to="/conta/pagamentos">
                <li>
                  <SvgMoney className={styles.svg} id={styles.money} />
                  Pagamentos
                </li>
              </Link>
              <Link to="/conta/financas">
                <li>
                  <SvgBank className={styles.svg} />
                  Financeira
                </li>
              </Link>
              <hr size="3" color="#303030" width="80%" />
              <Link to="/">
                <li>
                  <SvgDoor className={styles.svg} />
                  Sair
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
