import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rudra KY</title>
        <meta
          name='description'
          content='Desenrollando la energía kundalini en conjunto'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.rightMain}></div>
      </main>
    </div>
  );
}
