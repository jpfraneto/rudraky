import styles from './styles.module.css';

const KriyaElement = ({ ej, setShowStopwatch, setCurrentEx }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: ej.complete && 'white' }}
    >
      <p>
        {ej.name}
        {ej.duration && (
          <span>
            {' - '}
            <span
              className={styles.openStopwatch}
              onClick={() => {
                setShowStopwatch(true);
                setCurrentEx(ej);
              }}
            >
              Abrir Cronómetro ⏰ ({ej.duration} segundos )
            </span>
          </span>
        )}
      </p>
    </div>
  );
};

export default KriyaElement;
