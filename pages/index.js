import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NewKriya from '../components/NewKriya';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rudra KY</title>
        <meta
          name='description'
          content='Awakening the Kundalini Energy With the heat that comes from commitment to do the work'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftMain}>
          <h1 className={styles.title}>Últimos Kriyas</h1>
          <NewKriya name='Seba' />
          <NewKriya name='Ana Lucia' />
          <NewKriya name='Ana Cristina' />
        </div>
        <div className={styles.rightMain}>
          <Image
            className={styles.userImage}
            src='/images/sebaparra.jpeg'
            width={100}
            height={100}
          />
          <Image
            className={styles.userImage}
            src='/images/sebaparra.jpeg'
            width={100}
            height={100}
          />
          <Image
            className={styles.userImage}
            src='/images/sebaparra.jpeg'
            width={100}
            height={100}
          />
        </div>
      </main>
    </div>
  );
}
