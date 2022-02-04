import { useEffect } from 'react/cjs/react.development';
import StopwatchContainer from '../StopwatchContainer';
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
  const handleNextEx = () => {
    if (thisKriya.length > currentExIndex + 1) {
      const nextEx = thisKriya[currentExIndex + 1];
      setCurrentExIndex(prev => prev + 1);
      setCurrentEx(nextEx);
    } else {
      alert('Se terminó la práctica!');
    }
  };
  return (
    <div className={styles.activeKriyaContainer}>
      <div className={styles.topContainer}>
        <h2 className={styles.exTitle}>
          <span className={styles.sectionSpan}>{currentEx.section}</span>
          <span className={styles.exName}>{currentEx.exName}</span>
        </h2>
        <p>{currentEx.description}</p>
        {showStopwatch && (
          <StopwatchContainer
            currentEx={currentEx}
            setShowStopwatch={setShowStopwatch}
          />
        )}
        <button onClick={handleNextEx} className={styles.nextEx}>
          Siguiente Ejercicio
        </button>
      </div>
    </div>
  );
};

export default ActiveKriyaDisplay;
