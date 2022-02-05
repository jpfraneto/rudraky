import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
import Link from 'next/link';
import { useState } from 'react';

const KriyaDisplay = ({
  thisKriya,
  setCurrentEx,
  currentExIndex,
  setShowStopwatch,
  setStartedKriya,
  startedKriya,
}) => {
  const [chosenSection, setChosenSection] = useState(null);
  const handleStartKriya = () => {
    setStartedKriya(true);
    setCurrentEx(thisKriya.exercizes[currentExIndex]);
    setShowStopwatch(true);
  };

  const durationFormat = dur => {
    return typeof dur === 'number' ? `${dur} Segundos` : `${dur} Repeticiones`;
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
          <div className={styles.ejercicio} key={ex.id}>
            <span className={styles.sectionSpan}>{ex.section} </span>
            <span className={styles.nameSpan}>{ex.exName}</span>
            <span className={styles.durationSpan}>
              {durationFormat(ex.exDuration)}
            </span>
          </div>
        ))}
      </div>

      {!startedKriya && (
        <>
          <button onClick={handleStartKriya} className={styles.startKiryaBtn}>
            Empezar Kriya
          </button>
          <Link href='/kriyas'>
            <a className={styles.startKiryaBtn}>Volver</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default KriyaDisplay;
