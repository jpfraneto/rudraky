import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
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
    setCurrentEx(thisKriya[currentExIndex]);
    setShowStopwatch(true);
  };

  const durationFormat = dur => {
    return typeof dur === 'number' ? `${dur} Segundos` : `${dur} Repeticiones`;
  };

  return (
    <div className={styles.mainContainer}>
      <h2>
        Kriya Para un Corazón Tranquilo{' '}
        <span className={styles.kriyaSignature}>Creado por Amrit Akasha</span>
      </h2>
      <div className={styles.kriyaNavbar}>
        {thisKriya.map((ex, id) => (
          <div className={styles.ejercicio}>
            <span className={styles.sectionSpan}>{ex.section} </span>
            <span className={styles.nameSpan}>{ex.name}</span>
            <span className={styles.durationSpan}>
              {durationFormat(ex.duration)}
            </span>
          </div>
        ))}
      </div>

      {!startedKriya && (
        <button onClick={handleStartKriya} className={styles.startKiryaBtn}>
          Empezar Kriya
        </button>
      )}
    </div>
  );
};

export default KriyaDisplay;
