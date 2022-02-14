import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
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
        <h3>RUDRA KY</h3>
        <div className={styles.buttonsContainer}>
          <Link href='/kriyas'>
            <a>Kriyas</a>
          </Link>
          <Link href='/recordings'>
            <a>Grabaciones</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
