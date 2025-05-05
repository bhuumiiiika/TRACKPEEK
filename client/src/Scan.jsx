import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Scan.module.css';

function Scan() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleScan = async () => {
    if (url.trim()) {
      try {
        // 🔄 Send URL to backend to start scanning
        const response = await axios.post('https://trackpeek.onrender.com/api/scan/start', { url });
        const scanId = response.data.scanId;

        // ✅ Redirect to Scan Processing page with scanId as param
        navigate(`/scan-processing/${scanId}`);
      } catch (error) {
        console.error('Failed to start scan:', error);
        alert('Failed to start scan. Please try again.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img className={styles.cardimg} src='/logo.webp' alt='TrackPeeK'></img>
      <h1 className={styles.heading}>TrackPeek</h1>
      <p className={styles.pragraph}>Enter any website URL to visualize how it tracks and shares your data.</p>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter website URL"
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button className={styles.btton} onClick={handleScan}>Scan Me</button>
    </div>
    </div>
  );
}

export default Scan;
