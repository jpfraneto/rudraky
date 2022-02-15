import styles from './styles.module.css';
import { useState, useEffect } from 'react';

const Stopwatch = ({ currentEx }) => {
  const [start, setStart] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [started, setStarted] = useState(false);

  const targetDuration = currentEx.exDuration;

  useEffect(() => {
    const interval = null;
    if (start) {
      setStarted(true);
      interval = setInterval(() => {
        setElapsedTime(prevTime => {
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  const secsToTime = s => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins > 9 ? mins : `0${mins}`}:${secs > 9 ? secs : `0${secs}`}`;
  };

  return (
    <div className={styles.mainContainer}>
      <h2>
        <span style={{ color: targetDuration <= elapsedTime && 'white' }}>
          {secsToTime(elapsedTime)}
        </span>{' '}
        de {secsToTime(targetDuration)}
      </h2>
      {targetDuration <= elapsedTime && (
        <div className={styles.messagesContainer}>
          <p className={styles.timeAlert}>Tiempo!</p>
          <p className={styles.subText}>
            Tus alumnos están pa la cagá, córtales!
          </p>
        </div>
      )}
      <div className={styles.controlsContainer}>
        {!started && <button onClick={() => setStart(true)}>Empezar</button>}
        {start && <button onClick={() => setStart(false)}>Parar</button>}
        {started && !start && (
          <button
            onClick={() => {
              setStart(true);
            }}
          >
            Reanudar
          </button>
        )}
        {started && (
          <>
            <button
              onClick={() => {
                setElapsedTime(0);
                setStart(false);
                setStarted(false);
              }}
            >
              Reiniciar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
