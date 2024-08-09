import React from 'react'
import { Day } from './Day'
import styles from './Month.module.css';

export const Month = ({month}) => {
  return (
    <div className={styles.month}>
        {month.map((row, i) => (
            <div key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} />
                ))}
            </div>
        ))}
    </div>
  )
}
