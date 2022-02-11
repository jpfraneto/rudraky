import styles from '../../styles/Success.module.css';
import Router, { useRouter } from 'next/router';
import Button from '../../components/Button';

const KriyaSuccess = () => {
  const router = useRouter();
  const handleBtnClick = () => {
    router.push('/kriyas');
  };
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
        <Button text='Volver a Kriyas' actionOnClick={handleBtnClick} />
      </div>
    </div>
  );
};

export default KriyaSuccess;
