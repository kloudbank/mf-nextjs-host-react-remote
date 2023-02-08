'use client'
import '@module-federation/nextjs-mf/src/include-defaults';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic';

import Test from './error-handling/test';

// const inter = Inter({ subsets: ['latin'] })

const RemoteLogo = dynamic(() => import('ui/Logo'), {
  ssr: false,
});
const RemoteGlobalNav = dynamic(() => import('ui/GlobalNav'), {
  ssr: false,
});

const ExternalLink = dynamic(() => import('ui/ExternalLink'), {
  ssr: false,
});


export default function Home() {
  return (
    
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          HOST<br/>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <RemoteGlobalNav />
        </div>
        {/* <RemoteLogo /> */}
      </div>

      <ExternalLink href="https://beta.nextjs.org/docs/data-fetching/fetching#dynamic-data">
        ExternalLink
      </ExternalLink>

      <div className={styles.center}>
        <div>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <h2>HOST</h2>

    </main>
  )
}
