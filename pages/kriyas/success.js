import styles from '../../styles/Success.module.css';

const KriyaSuccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          Que todos los seres sean felices.
          <div className={styles.fadingEffect}></div>
        </div>
        <div className={styles.text}>
          Que todos los seres alcancen la paz.
          <div className={styles.fadingEffect}></div>
        </div>
        <div className={styles.text}>
          Que todos los seres se liberen.
          <div className={styles.fadingEffect}></div>
        </div>
        <p className={styles.satNam}>Sat Nam</p>
      </div>
    </div>
  );
};

export default KriyaSuccess;
