import React, { useState, useEffect } from "react";
import styles from "../styles/component/comp_countdown.module.css";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    weeks: "00",
    days: "00",
    hours: "00"
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const date1 = new Date();
      const targetDate = new Date("12/04/2025"); // Updated to future date
      
      const diff = targetDate.getTime() - date1.getTime();
      
      // Check if the event has passed
      if (diff <= 0) {
        setTimeLeft({ weeks: "00", days: "00", hours: "00" });
        return;
      }
      
      let weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
      let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      weeks = weeks < 10 ? "0" + weeks : weeks.toString();
      days = days < 10 ? "0" + days : days.toString();
      hours = hours < 10 ? "0" + hours : hours.toString();

      setTimeLeft({ weeks, days, hours });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 3600000); // Update every hour

    return () => clearInterval(timer);
  }, []);
  return(
     
  <section className={styles.coutdownSection}>
    <h2>SIBAQ 25 FINALE - 04 DEC </h2>
    <span className={styles.countSpans}>
      <div className={`${styles.spans} ${styles.weeks}`}>
        <h3>{timeLeft.weeks}</h3>
        <h2>WEEKS</h2>
      </div>
      <span className={styles.verticalLine}></span>
      <div className={`${styles.spans} ${styles.days}`}>
        <h3>{timeLeft.days}</h3>
        <h2> DAYS</h2>
      </div>
      <span className={styles.verticalLine}></span>
      <div className={`${styles.spans} ${styles.hours}`}>
        <h3>{timeLeft.hours}</h3>
        <h2>HOURS</h2>

      </div>
    </span>
  </section>
  )
}
 