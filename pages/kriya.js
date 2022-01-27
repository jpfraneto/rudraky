import styles from '../styles/Kriya.module.css';
import KriyaElement from '../components/KriyaElement';
import KriyaDisplay from '../components/KriyaDisplay';
import Stopwatch from '../components/Stopwatch';
import { useState } from 'react';
import StopwatchContainer from '../components/StopwatchContainer';
const sections = [
  'Invocacion',
  'Calentamiento',
  'Kriya',
  'Relajacion',
  'Meditacion',
  'Cierre',
];

const chosenKriya = [
  { section: 'Invocacion', name: 'a', duration: 2, complete: false },
  { section: 'Invocacion', name: 'b', duration: 2, complete: false },
  {
    section: 'Calentamiento',
    name: 'Respiracion de Fuego',
    duration: 188,
    complete: false,
  },
  {
    section: 'Calentamiento',
    name: 'Saludos al Sol',
    duration: '3 reps',
    complete: false,
  },
  {
    section: 'Kriya',
    name: 'Sat Kriya',
    duration: 188,
    complete: false,
  },
  {
    section: 'Kriya',
    name: 'Flexiones Espinales',
    duration: 33,
    complete: false,
  },
  {
    section: 'Relajación',
    name: 'Relajacion',
    duration: 600,
    complete: false,
  },
  {
    section: 'Meditación',
    name: 'Corazón Tranquilo',
    duration: 444,
    complete: false,
  },
  {
    section: 'Cierre',
    name: 'Corazón Tranquilo',
    duration: 33,
    complete: false,
  },
];

const Kriya = () => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [targetDuration, setTargetDuration] = useState(0);
  const [selectedSection, setSelectedSection] = useState('');
  const [thisKriya, setThisKriya] = useState(chosenKriya);
  const [currentEx, setCurrentEx] = useState({});
  const [showNewExercize, setShowNewExercize] = useState(false);
  const [newEx, setNewEx] = useState({});

  const handleChooseSection = name => {
    setSelectedSection(name);
  };

  const handleNewExercize = () => {
    setShowNewExercize(!showNewExercize);
  };

  const handleNewName = e => {
    setNewEx(ex => setNewEx({ ...ex, name: e.target.value }));
  };

  const handlePrinter = e => {
    console.log('the new ex is: ', newEx);
  };

  const handleComments = e => {
    setNewEx(ex => setNewEx({ ...ex, comments: e.target.value }));
  };

  const handleDurationChange = e => {
    setNewEx(ex => setNewEx({ ...ex, duration: e.target.value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('the new ex is: ', newEx);
  };

  return (
    <div className={styles.container}>
      {showStopwatch && (
        <StopwatchContainer
          targetDuration={targetDuration}
          currentEx={currentEx}
          thisKriya={thisKriya}
          setThisKriya={setThisKriya}
          setShowStopwatch={setShowStopwatch}
        />
      )}
      <div className={styles.leftDiv}>
        <KriyaDisplay
          setShowStopwatch={setShowStopwatch}
          setTargetDuration={setTargetDuration}
          thisKriya={thisKriya}
          setThisKriya={setThisKriya}
          setCurrentEx={setCurrentEx}
        />
      </div>
      {/* <div className={styles.rightDiv}>
        <h3>Arma tu Kriya</h3>
        <div className={styles.innerWrapper}>
          <div className={styles.classStructure}></div>
          <div className={styles.classDefinition}>
            <button onClick={handleNewExercize}>Nuevo Ejercicio</button>
            <button
              onClick={() => {
                setShowStopwatch(true);
              }}
            >
              Show stopwatch
            </button>
            {showNewExercize && (
              <div className={styles.newExercizeContainer}>
                <h4>Agrega un nuevo ejercicio</h4>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Nombre:
                    <input
                      type='text'
                      placeholder='Nombre del Ejercicio'
                      onChange={handleNewName}
                    />
                  </label>
                  <label>
                    Duración:
                    <div className={styles.durationContainer}>
                      <input
                        onChange={handleDurationChange}
                        type='number'
                        placeholder='Minutos'
                      />
                    </div>
                  </label>
                  <label>
                    Comentarios:
                    <textarea
                      placeholder='Comentarios'
                      onChange={handleComments}
                    />
                  </label>
                  {selectedSection ? (
                    <button type='submit'>Agregar a {selectedSection}</button>
                  ) : (
                    <select onChange={e => handleChooseSection(e.target.value)}>
                      {sections.map((section, i) => (
                        <option key={i} value={section}>
                          {section}
                        </option>
                      ))}
                    </select>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
        <button onClick={() => console.log(currentEx)}>Print Ex</button>
      </div> */}
    </div>
  );
};

export default Kriya;
