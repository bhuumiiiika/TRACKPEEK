import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Add this import
import axios from 'axios';
import styles from './ScanSummary.module.css';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ScanSummary() {
  const [scanData, setScanData] = useState(null);
  const { scanId } = useParams(); 

  const pieData = scanData
  ? {
      labels: ['Cookies', 'Trackers', 'Density'], // Add 'Density' to the labels
      datasets: [
        {
          label: 'Scan Results',
          data: [scanData.cookies, scanData.trackers, scanData.density], // Include 'density' in the data array
          backgroundColor: ['#1B264D', '#263B61', '#13576E'], // Add a color for density
          hoverBackgroundColor: ['#1B264D', '#263B61', '#13576E'], // Same hover colors
        },
      ],
    }
  : null;

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right', // or 'top', 'bottom', 'left' as needed
        align: 'center',
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 15, // controls space between labels
          font: {
            size: 16,
            family: 'Nova Square',
            weight: 'bold',
          },
          color: 'white',
          usePointStyle: false,
        }
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      }
    }
  };
  

  useEffect(() => {
    const fetchScanData = async () => {
      try {
        const response = await axios.get(`https://trackpeek.onrender.com/api/scan/summary/${scanId}`);
        setScanData(response.data);
      } catch (error) {
        console.error('Error fetching scan data:', error);
      }
    };

    fetchScanData();
  }, [scanId]);

  if (!scanData) {
    return <div>Loading scan data...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Scan Summary</h1>
        <div className={styles.contentWrapper}>
          {/* Left side: details */}
          <div className={styles.details}>
            <p><strong>Website:</strong> {scanData.url}</p>
            <p><strong>Date of scan:</strong> {scanData.date}</p>
            <p><strong>Total Cookies Detected:</strong> {scanData.cookies}</p>
            <p><strong>Total Trackers Found:</strong> {scanData.trackers}</p>
            <p><strong>Trackers origin:</strong> {scanData.origin}</p>
            <p><strong>IP Address:</strong> {scanData.ip}</p>
            <p><strong>Density:</strong> {scanData.density}%</p>
            <p><strong>Risk rate:</strong> {scanData.riskrate}</p>
            <button className={styles.pbtton}>Block Cookies</button>
          </div>
  
          {/* Right side: chart */}
          {pieData && (
            <div className={styles.chart}>
              <Pie data={pieData} width={100} height={100} options={pieOptions} />
            </div>
          )}
        </div>
      </div>
  
      <div className={styles.footer}>
        <p className={styles.footp}>
          Built with passion, precision, and a commitment to your security. Made with ❤️ by CODE CREATURES.
        </p>
      </div>
    </div>
  );
}

export default ScanSummary;
