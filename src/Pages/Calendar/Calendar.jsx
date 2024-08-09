import React, { useState, useEffect } from "react";
import styles from "./Calendar.module.css";
import Dots from "../../Assets/dots.svg?react";
import ArrowLeft from "../../Assets/arrow-left.svg?react";
import ArrowRight from "../../Assets/arrow-right.svg?react";
import Add from "../../Assets/add.svg?react";
import dayjs from "dayjs";

export const Calendar = () => {
  const [month, setMonth] = useState(dayjs().month()); // Obtém o mês atual
  const [daysInMonth, setDaysInMonth] = useState([]);

  const months = [
    { id: 0, name: "Janeiro" },
    { id: 1, name: "Fevereiro" },
    { id: 2, name: "Março" },
    { id: 3, name: "Abril" },
    { id: 4, name: "Maio" },
    { id: 5, name: "Junho" },
    { id: 6, name: "Julho" },
    { id: 7, name: "Agosto" },
    { id: 8, name: "Setembro" },
    { id: 9, name: "Outubro" },
    { id: 10, name: "Novembro" },
    { id: 11, name: "Dezembro" },
  ];

  useEffect(() => {
    const currentMonth = dayjs().month(month); // Cria uma instância dayjs para o mês atual
    const daysInCurrentMonth = currentMonth.daysInMonth(); // Número de dias no mês
    const startOfMonth = currentMonth.startOf("month").day(); // Dia da semana em que o mês começa
    const daysArray = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

    // Adiciona dias vazios no início para alinhar o primeiro dia da semana
    for (let i = 0; i < startOfMonth; i++) {
      daysArray.unshift("");
    }

    setDaysInMonth(daysArray);
  }, [month]);

  const handleNext = () => {
    if (month < months.length - 1) {
      setMonth(month + 1);
    }
  };

  const handlePrevious = () => {
    if (month > 0) {
      setMonth(month - 1);
    }
  };

  return (
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
            <ArrowLeft onClick={handlePrevious} disabled={month === 0} />
            <ArrowRight onClick={handleNext} disabled={month === months.length - 1} />
          </div>
          <div className={styles.calendar}>
            <div className={styles.containerDays}>
              <div className={styles.month}>
                <h2>{months[month].name}</h2>
                <div className={styles.daysOfWeek}>
                  <div>Dom</div>
                  <div>Seg</div>
                  <div>Ter</div>
                  <div>Qua</div>
                  <div>Qui</div>
                  <div>Sex</div>
                  <div>Sáb</div>
                </div>
                <div className={styles.monthContent}>
                  {daysInMonth.map((day, index) => (
                    <div key={index}>{day}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
