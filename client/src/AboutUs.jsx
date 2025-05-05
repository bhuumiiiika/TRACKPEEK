import React from 'react';
import styles from './AboutUs.module.css'

function AboutUs() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <h1>About Us:</h1>
      <p>
Trackpeek is a tool designed to uncover the hidden layers of the websites you visit. We simulate any site in a secure, sandboxed environment — just like your browser does — and closely inspect what’s happening behind the curtain.</p>

<p>From cookies to trackers, we capture and analyze:</p>

<p>All cookies set by the site — whether they’re from the website itself or third-party services like ad networks or analytics tools.</p>

<p>Every network request — revealing where your data is going, what’s being sent, and who’s receiving it.</p>

<p>Tracking connections between third-party domains — visualized as a web of surveillance to show how different services share your data.</p>

<p>Finally, we calculate a Privacy Risk Score (from 0 to 100), helping you understand how exposed you are during a visit.</p>

<p>We believe in privacy by design</p>
<p>We don’t store URLs or scan data</p>
<p>We don’t track users</p>
<p>We value transparency, education, and digital autonomy</p>

<p>Whether you're a privacy nerd, a curious user, or a web designer who wants to build better — Trackpeek helps you see the unseen and take back control.</p>
    </div>
    </div>
  );
}

export default AboutUs;
