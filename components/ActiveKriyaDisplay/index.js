import { useState, useEffect } from 'react/cjs/react.development';
import StopwatchContainer from '../StopwatchContainer';
import KriyaCommenter from '../KriyaCommenter';
import styles from './styles.module.css';

const ActiveKriyaDisplay = ({
  currentEx,
  setCurrentExIndex,
  showStopwatch,
  setShowStopwatch,
  currentExIndex,
  thisKriya,
  setCurrentEx,
}) => {
  const [finished, setFinished] = useState(false);
  const handleNextEx = () => {
    if (thisKriya.exercizes.length > currentExIndex + 1) {
      const nextEx = thisKriya.exercizes[currentExIndex + 1];
      setCurrentExIndex(prev => prev + 1);
      setCurrentEx(nextEx);
    } else {
      setFinished(true);
    }
  };
  return (
    <div className={styles.activeKriyaContainer}>
      {!finished ? (
        <div className={styles.topContainer}>
          <h2 className={styles.exTitle}>
            <span className={styles.sectionSpan}>{currentEx.section}</span>
            <span className={styles.exName}>{currentEx.exName}</span>
          </h2>
          <p>{currentEx.description}</p>

          <StopwatchContainer
            currentEx={currentEx}
            setShowStopwatch={setShowStopwatch}
          />
          <button onClick={handleNextEx} className={styles.nextEx}>
            {thisKriya.exercizes.length === currentExIndex + 1
              ? 'Finalizar Kriya'
              : 'Siguiente Ejercicio'}
          </button>
        </div>
      ) : (
        <KriyaCommenter thisKriya={thisKriya} />
      )}
    </div>
  );
};

export default ActiveKriyaDisplay;
