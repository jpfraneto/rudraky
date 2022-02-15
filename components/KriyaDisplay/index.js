import styles from './styles.module.css';

import Button from '../Button';
import { useRouter } from 'next/router';

const KriyaDisplay = ({
  thisKriya,
  setCurrentEx,
  currentExIndex,
  setCurrentExIndex,
  setShowStopwatch,
  setStartedKriya,
  startedKriya,
  setThisKriya,
}) => {
  const router = useRouter();
  const handleStartKriya = () => {
    setStartedKriya(true);
    setThisKriya(prevKriya => {
      const prevExs = prevKriya.exercizes;
      prevExs[0].active = 0;
      return { ...prevKriya, exercizes: prevExs };
    });
    setCurrentEx(thisKriya.exercizes[currentExIndex]);
    setShowStopwatch(true);
  };

  const stopKriya = () => {
    const confirmBox = window.confirm('Seguro que quieres empezar de cero?');
    if (confirmBox) {
      setStartedKriya(false);
      setThisKriya(prevKriya => {
        const updatedKriya = prevKriya;
        updatedKriya.exercizes.forEach(ex => (ex.active = 1));
        updatedKriya.exercizes[0].active = 0;
        return updatedKriya;
      });
      setCurrentExIndex(0);
    }
  };

  const handleEditKriya = () => {
    router.push(`/kriyas/${thisKriya._id}/edit`);
  };

  return (
    <div className={styles.mainContainer}>
      <h2>
        {thisKriya.name}
        <span className={styles.kriyaSignature}>
          {' '}
          Creado por {thisKriya.author}
        </span>
      </h2>
      <div className={styles.kriyaNavbar}>
        {thisKriya.exercizes &&
          thisKriya.exercizes.map((ex, id) => (
            <div
              className={styles.ejercicio}
              key={ex.id}
              style={{
                backgroundColor:
                  ex.active < 0 ? 'lightblue' : ex.active === 0 && 'green',
              }}
            >
              <span className={styles.sectionSpan}>{ex.section} </span>
              <span className={styles.nameSpan}>{ex.exName}</span>
              <span className={styles.durationSpan}>
                {ex.exDuration} {ex.durationType}
              </span>
            </div>
          ))}
      </div>
      {startedKriya && (
        <Button text='Volver a Empezar' actionOnClick={stopKriya} />
      )}

      {!startedKriya && (
        <>
          <Button text='Empezar Kriya' actionOnClick={handleStartKriya} />
          <Button text='Editar Kriya' actionOnClick={handleEditKriya} />
        </>
      )}
    </div>
  );
};

export default KriyaDisplay;
