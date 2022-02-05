import styles from './styles.module.css';
import Stopwatch from '../Stopwatch';

const StopwatchContainer = ({ currentEx }) => {
  console.log('the currentEx is: ', currentEx);
  return (
    <div className={styles.cronometro}>
      {currentEx.durationType === 'Segundos' ? (
        <Stopwatch currentEx={currentEx} />
      ) : (
        <h2>
          {currentEx.exDuration} {currentEx.durationType}
        </h2>
      )}
    </div>
  );
};

export default StopwatchContainer;
