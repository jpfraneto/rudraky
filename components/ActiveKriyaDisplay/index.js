import { useState, useEffect } from 'react';
import StopwatchContainer from '../StopwatchContainer';
import Button from '../Button';
import KriyaCommenter from '../KriyaCommenter';
import styles from './styles.module.css';

const ActiveKriyaDisplay = ({
  currentEx,
  setCurrentExIndex,
  setShowStopwatch,
  currentExIndex,
  thisKriya,
  setCurrentEx,
  setThisKriya,
}) => {
  const [finished, setFinished] = useState(false);
  const handleNextEx = () => {
    if (thisKriya.exercizes.length > currentExIndex + 1) {
      setThisKriya(prevKriyaState => {
        const prevExercizes = prevKriyaState.exercizes;
        prevExercizes[currentExIndex].active = -1;
        prevExercizes[currentExIndex + 1].active = 0;
        return { ...prevKriyaState, exercizes: prevExercizes };
      });
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
          <Button
            text={
              thisKriya.exercizes.length === currentExIndex + 1
                ? 'Finalizar Kriya'
                : 'Siguiente Ejercicio'
            }
            actionOnClick={handleNextEx}
          />
        </div>
      ) : (
        <KriyaCommenter thisKriya={thisKriya} />
      )}
    </div>
  );
};

export default ActiveKriyaDisplay;
