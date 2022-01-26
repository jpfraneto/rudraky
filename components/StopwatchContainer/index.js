import styles from './styles.module.css';
import Stopwatch from '../Stopwatch';

const StopwatchContainer = ({ setShowStopwatch, targetDuration }) => {
  return (
    <div className={styles.cronometro}>
      <span onClick={() => setShowStopwatch(false)} className={styles.closeBtn}>
        ❌
      </span>
      <h6>Respiración de Fuego</h6>
      <Stopwatch
        targetDuration={targetDuration}
        targetDuration={targetDuration}
      />
    </div>
  );
};

export default StopwatchContainer;
