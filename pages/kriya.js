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
  {
    section: 'Invocacion',
    ejercicios: [
      { name: 'a', duration: 2, complete: false },
      { name: 'b', duration: 23, complete: false },
    ],
  },
  {
    section: 'Calentamiento',
    ejercicios: [
      {
        name: 'Respiracion de Fuego',
        duration: 188,
        reps: null,
        complete: false,
      },
      { name: 'Saludos al Sol', duration: null, reps: 3, complete: false },
    ],
  },
  {
    section: 'Kriya',
    ejercicios: [
      { name: 'Sat Kriya', duration: 188, complete: false },
      { name: 'Flexiones Espinales', duration: 111, complete: false },
    ],
  },
  {
    section: 'Relajacion',
    ejercicios: [{ name: 'Relajacion', duration: 600, complete: false }],
  },
  {
    section: 'Meditacion',
    ejercicios: [{ name: 'Meditacion', duration: 444, complete: false }],
  },
  {
    section: 'Cierre',
    ejercicios: [{ name: 'Cierre', duration: null, complete: false }],
  },
];

const Kriya = () => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [targetDuration, setTargetDuration] = useState(0);
  const [selectedSection, setSelectedSection] = useState('');
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
          setShowStopwatch={setShowStopwatch}
        />
      )}
      <div className={styles.leftDiv}>
        <KriyaDisplay
          setShowStopwatch={setShowStopwatch}
          setTargetDuration={setTargetDuration}
          kriya={chosenKriya}
        />
      </div>
      <div className={styles.rightDiv}>
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
        <button onClick={handlePrinter}>Print Ex</button>
      </div>
    </div>
  );
};

export default Kriya;
