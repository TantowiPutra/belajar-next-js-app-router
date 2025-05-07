"use client"

import Image from 'next/image'
import styles from './page.module.css'
// import { useCount } from '@/context' 
import { dataStore } from '@/store/datastore'

export default function Home() {
  const { inc } = dataStore();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to the course</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <button onClick={() => (inc())}>Count ++</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}