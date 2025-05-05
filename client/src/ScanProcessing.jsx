import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ScanProcessing.module.css';

function ScanProcessing() {
  const navigate = useNavigate();
  const { scanId } = useParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/scan/progress/${scanId}`);
        setProgress(res.data.progress);

        if (res.data.progress >= 100 || res.data.status === 'done') {
          clearInterval(interval);

          // Automatically redirect to summary page
          navigate(`/scan-summary/${scanId}`);
        }
      } catch (error) {
        console.error('Error fetching scan progress:', error);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [scanId, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.cardimg} src='/logo.webp' alt='TrackPeeK' />
        <h1 className={styles.heading}>TrackPeek</h1>

        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>

        <h2 className={styles.heading}>Scanning... {progress}%</h2>
      </div>
    </div>
  );
}

export default ScanProcessing;
