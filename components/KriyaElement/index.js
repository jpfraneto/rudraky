import styles from './styles.module.css';

const KriyaElement = ({
  ej,
  setTargetDuration,
  setShowStopwatch,
  handleChooseSection,
}) => {
  return (
    <div className={styles.container}>
      <p>
        {ej.name}, {ej.duration} segundos -{' '}
        <span
          className={styles.openStopwatch}
          onClick={() => {
            setShowStopwatch(true);
            setTargetDuration(ej.duration);
          }}
        >
          Abrir Cronómetro
        </span>
      </p>
    </div>
  );
};

export default KriyaElement;
