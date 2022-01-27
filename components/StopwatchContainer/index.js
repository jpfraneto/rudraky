import styles from './styles.module.css';
import Stopwatch from '../Stopwatch';

const StopwatchContainer = ({
  setShowStopwatch,
  thisKriya,
  setThisKriya,
  currentEx,
}) => {
  return (
    <div className={styles.cronometro}>
      <span onClick={() => setShowStopwatch(false)} className={styles.closeBtn}>
        ❌
      </span>
      <h6>{currentEx.name}</h6>
      <Stopwatch
        thisKriya={thisKriya}
        setThisKriya={setThisKriya}
        currentEx={currentEx}
      />
    </div>
  );
};

export default StopwatchContainer;
