import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomePage from '../components/Home/Home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Measure My Deck</title>
        <meta name="description" content="Store and assign your cards to a deck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
