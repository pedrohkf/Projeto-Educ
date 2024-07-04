import React, { useState } from "react";
import styles from "./Calendar.module.css";
import Dots from "../../Assets/dots.svg?react";
import ArrowLeft from "../../Assets/arrow-left.svg?react";
import ArrowRight from "../../Assets/arrow-right.svg?react";
import Add from "../../Assets/add.svg?react";

export const Calendar = () => {
  return (
    <>
      <main>
        <section>
          <div className={styles.title}>
            <h1>Calendário</h1>
            <div className={styles.description}>
              <div className={styles.button}>
                <Add />
                <p>Agendamento</p>
              </div>
              <div className={styles.dots}>
                <Dots />
              </div>
            </div>
            <hr size="3" color="#303030" width="95%" />
            <div className={styles.arrows}>
              <ArrowLeft />
              <ArrowRight />
            </div>
            <div className={styles.calendar}>
              <div className={styles.hours}>
                <div>1 pm</div>
                <div>1 pm</div>
                <div>1 pm</div>
                <div>1 pm</div>
                <div>1 pm</div>
              </div>
              <div className={styles.containerDays}>
                <div className={styles.days}>
                  <div>
                    <p id={styles.number}>1</p>
                    <p>Segunda</p>
                  </div>
                  <div>
                    <p id={styles.number}>2</p>
                    <p>Terça</p>
                  </div>
                  <div>
                    <p id={styles.number}>3</p>
                    <p>Quarta</p>
                  </div>
                  <div>
                    <p id={styles.number}>4</p>
                    <p>Quinta</p>
                  </div>
                  <div>
                    <p id={styles.number}>5</p>
                    <p>Sexta</p>
                  </div>
                  <div>
                    <p id={styles.number}>6</p>
                    <p>Sabado</p>
                  </div>
                  <div>
                    <p id={styles.number}>7</p>
                    <p>Domingo</p>
                  </div>
                </div>
                <div className={styles.markers}>
                  <div>
                    <div>Tarefas</div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
