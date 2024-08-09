import React from 'react';
import styles from './Day.module.css';
import dayjs from 'dayjs';

export const Day = ({day}) => {
  return (
    <div className={`${styles.day}`}>
        <p>{day.format('ddd').toUpperCase()}</p>
        <p>{day.format("DD")}</p>
    </div>
  )
}
