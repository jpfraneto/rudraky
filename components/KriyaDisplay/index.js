import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
import Link from 'next/link';
import Button from '../Button';
import { useState } from 'react';

const KriyaDisplay = ({
  thisKriya,
  setCurrentEx,
  currentExIndex,
  setShowStopwatch,
  setStartedKriya,
  startedKriya,
  setThisKriya,
}) => {
  const handleStartKriya = () => {
    setStartedKriya(true);
    setThisKriya(prevKriya => {
      const prevExs = prevKriya.exercizes;
      prevExs[0].active = 0;
      return { ...prevKriya, exercizes: prevExs };
    });
    setCurrentEx(thisKriya.exercizes[currentExIndex]);
    setShowStopwatch(true);
  };

  return (
    <div className={styles.mainContainer}>
      <h2>
        {thisKriya.name}
        <span className={styles.kriyaSignature}>
          {' '}
          Creado por {thisKriya.author}
        </span>
      </h2>
      <div className={styles.kriyaNavbar}>
        {thisKriya.exercizes.map((ex, id) => (
          <div
            className={styles.ejercicio}
            key={ex.id}
            style={{
              backgroundColor:
                ex.active < 0 ? 'lightblue' : ex.active === 0 && 'green',
            }}
          >
            <span className={styles.sectionSpan}>{ex.section} </span>
            <span className={styles.nameSpan}>{ex.exName}</span>
            <span className={styles.durationSpan}>
              {ex.exDuration} {ex.durationType}
            </span>
          </div>
        ))}
      </div>

      {!startedKriya && (
        <>
          <Button text='Empezar Kriya' actionOnClick={handleStartKriya} />
          <Link href='/kriyas'>
            <a className={styles.startKiryaBtn}>Volver</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default KriyaDisplay;
