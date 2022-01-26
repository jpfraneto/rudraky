import styles from './styles.module.css';
import KriyaElement from '../KriyaElement';
import { useState } from 'react';

const KriyaDisplay = ({ kriya, setTargetDuration, setShowStopwatch }) => {
  const [chosenSection, setChosenSection] = useState(null);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.kriyaNavbar}>
        {kriya.map((section, id) => (
          <button onClick={() => setChosenSection(section)} key={id}>
            {section.section}
          </button>
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
              setTargetDuration={setTargetDuration}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KriyaDisplay;
