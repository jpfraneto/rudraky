import styles from './styles.module.css';
import Stopwatch from '../Stopwatch';

const StopwatchContainer = ({ setShowStopwatch, currentEx }) => {
  return (
    <div className={styles.cronometro}>
      {typeof currentEx.duration === 'number' ? (
        <Stopwatch currentEx={currentEx} />
      ) : (
        <h2>{currentEx.duration} repeticiones</h2>
      )}
    </div>
  );
};

export default StopwatchContainer;
