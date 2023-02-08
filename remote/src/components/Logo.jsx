import * as React from 'react';
import styles from '../styles/page.module.css';

const Logo = () => {
  return (
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
        />
      </a>
    </div>
  );
};

export default Logo;
