import styles from './styles.module.css';
import Stopwatch from '../Stopwatch';

const StopwatchContainer = ({ setShowStopwatch, currentEx }) => {
  return (
    <div className={styles.cronometro}>
      <span onClick={() => setShowStopwatch(false)} className={styles.closeBtn}>
        ❌
      </span>
      {typeof currentEx.duration === 'number' ? (
        <Stopwatch currentEx={currentEx} />
      ) : (
        <h2>{currentEx.duration} repeticiones</h2>
      )}
    </div>
  );
};

export default StopwatchContainer;
