import React from "react";
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
              {/* <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
