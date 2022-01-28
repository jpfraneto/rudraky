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
        <h2>{currentEx.name}</h2>
        <p>{currentEx.description}</p>
        <button onClick={handleNextEx} className={styles.nextEx}>
          Siguiente Ejercicio
        </button>
      </div>
      <div className={styles.bottomContainer}>
        {showStopwatch && (
          <StopwatchContainer
            currentEx={currentEx}
            setShowStopwatch={setShowStopwatch}
          />
        )}
      </div>
    </div>
  );
};

export default ActiveKriyaDisplay;
