import React from 'react';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>How TrackPeek works - In a Nutshell</h1>
        <ol>
          <li className={styles.list}>
            <p>Safe Scan: We simulate the website in a secure sandbox — no data is stored or tracked.</p>  
          </li>
          <li className={styles.list}>
            <p>Cookie Catcher: All cookies (first- & third-party) are logged and analyzed for behavior and security flags.</p>
          </li>
          <li className={styles.list}>
            <p>Network Watch: Every outgoing request is inspected — you’ll know who’s collecting what and where it’s going.</p>
          </li>
          <li className={styles.list}>
            <p>Surveillance Map: We create a visual web of third-party connections and data-sharing relationships.</p>
          </li>
          <li className={styles.list}>
            <p>Privacy Score: A clear 0–100 score tells you how exposed you are — lower is better.</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HowItWorks;
