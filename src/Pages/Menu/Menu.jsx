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
            <img src={Logo} alt="logo" id={styles.logoSistema}/>
          </div>
          <Link to="/calendario">
            <ul>
              <li>
                <SvgCalendar className={styles.svg} />
                Calendário
              </li>
            </ul>
          </Link>
          <hr size="3" color="#303030" width="80%" />
          <Link to="/alunos" className="link">
            <ul>
              <li>
                <SvgStudent className={styles.svg} id={styles.alunos} />
                Alunos
              </li>
            </ul>
          </Link>
          <Link to="/turmas" className="link">
            <ul>
              <li>
                <SvgPersons className={styles.svg} id={styles.turmas} />
                Turmas
              </li>
            </ul>
          </Link>
          <hr size="3" color="#303030" width="80%" />
          <Link to="/pagamentos" className="link">
            <ul>
              <li>
                <SvgMoney className={styles.svg} id={styles.money} />
                Pagamentos
              </li>
            </ul>
          </Link>
          <Link to="/financas" className="link">
            <ul>
              <li>
                <SvgBank className={styles.svg} />
                Financeira
              </li>
            </ul>
          </Link>
          <hr size="3" color="#303030" width="80%" />
          <Link to="/" className="link">
            <ul>
              <li>
                <SvgDoor className={styles.svg} />
                Sair
              </li>
            </ul>
          </Link>
        </nav>
      </div>
    </div>
  );
};
