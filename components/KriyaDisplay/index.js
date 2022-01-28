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
  activeKriyaRef,
}) => {
  const [chosenSection, setChosenSection] = useState(null);
  const handleStartKriya = () => {
    setStartedKriya(true);
    activeKriyaRef.current.scrollIntoView();
    setCurrentEx(thisKriya[currentExIndex]);
    setShowStopwatch(true);
  };

  const durationFormat = dur => {
    console.log(typeof dur);
    return typeof dur === 'number' ? `${dur} Segundos` : `${dur} Repeticiones`;
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Para un Corazón Tranquilo</h2>
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
