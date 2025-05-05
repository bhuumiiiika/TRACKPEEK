import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  const handleScanClick = () => {
    navigate('/scan');
  };
  return (
    <div className='container'>
      <div className="card">
      <img className='card-image' src='/logo.webp' alt='TrackPeeK'></img>
      <h1 className='card-title'>Trackpeek</h1>
      <p className='card-text'>Web Surveillance Visualizer. Enter any website URL and get a complete visual report of cookies, trackers, third-party domains, and how your data is being shared across the internet. Think of it as an x-ray for privacy.</p>
      <button className='card-button' onClick={handleScanClick}>Know More</button>
      </div>
    </div>
  );
}

export default Home;