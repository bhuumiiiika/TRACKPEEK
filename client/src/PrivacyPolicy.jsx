import React from 'react';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <h1>Privacy Policy</h1>

<p className={styles.para}>- No Tracking or Storage: We don’t store scanned URLs, personal info, or your IP address — ever.</p>

<p className={styles.para}>- Temporary Scans: Website scans happen in a secure, sandboxed session, then data is immediately discarded.</p>

<p className={styles.para}>- No Cookies, No Selling: We don’t use cookies, and never sell or share data with third parties.</p>

<p className={styles.para}>- Minimal Data: The only data we collect is just enough to generate the visual report — and it's not saved.</p>

<p className={styles.para}>- Contact Info Use: If you contact us, we use your info only to reply, not for anything else.
</p>
    </div>
    </div>
  );
}

export default PrivacyPolicy;