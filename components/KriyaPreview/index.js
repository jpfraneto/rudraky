import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
import { useState } from 'react';

const KriyaPreview = ({ thisKriya }) => {
  const handleKriyaSubmit = () => {
    // Before: Check if it has all of the sections
    if (checkIfAllExercizes(thisKriya.exercizes)) {
      return console.log('submit the kriya to DB');
    }
  };
  const checkIfAllExercizes = exs => {
    if (exs) {
      const sections = [
        'Invocacion',
        'Calentamiento',
        'Kriya',
        'Relajación',
        'Meditación',
        'Cierre',
      ];
      let availableSections = [];
      exs.forEach(ex => {
        if (!availableSections.includes(ex.section)) {
          availableSections.push(ex.section);
        }
      });
      if (availableSections.length === 6) {
        return true;
      }
    }
    const missing = sections.filter(x => !x.includes(availableSections));
    console.log('You are missing the following sections!', missing);
    return false;
  };
  return (
    <div className={styles.mainContainer}>
      {thisKriya.name && thisKriya.author && (
        <h2>
          {thisKriya.name}
          <span className={styles.kriyaSignature}>
            {' '}
            Creado por {thisKriya.author}
          </span>
        </h2>
      )}

      <div className={styles.kriyaNavbar}>
        {thisKriya.exercizes ? (
          thisKriya.exercizes.map((ex, id) => (
            <div className={styles.ejercicio}>
              <span className={styles.sectionSpan}>{ex.section} </span>
              <span className={styles.nameSpan}>{ex.exName} </span>
              <span className={styles.durationSpan}>
                {`${ex.exDuration} ${ex.durationType}`}
              </span>
            </div>
          ))
        ) : (
          <p>Agrega ejercicios al kriya!</p>
        )}
      </div>
      <button onClick={handleKriyaSubmit}>Agregar Kriya</button>
    </div>
  );
};

export default KriyaPreview;
