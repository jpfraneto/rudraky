import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
import { useState } from 'react';

const KriyaDisplay = ({ thisKriya, setCurrentEx, setShowStopwatch }) => {
  const [chosenSection, setChosenSection] = useState(null);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.kriyaNavbar}>
        {/* <button onClick={() => setChosenSection(section)} key={id}>
            {section.section}
          </button> */}
        {thisKriya.map((ex, id) => (
          <div className={styles.ejercicio}>
            <span>{ex.section} </span>
            <span>{ex.name}</span>
            <span>{ex.duration}</span>
          </div>
        ))}
      </div>
      {chosenSection && (
        <div className={styles.kriyaSection}>
          <h2>{chosenSection.section}</h2>
          {chosenSection.ejercicios.map((ej, i) => (
            <KriyaElement
              ej={ej}
              key={i}
              setShowStopwatch={setShowStopwatch}
              setCurrentEx={setCurrentEx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KriyaDisplay;
