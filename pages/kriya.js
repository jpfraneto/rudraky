import styles from '../styles/Kriya.module.css';
import KriyaElement from '../components/KriyaElement';
import { useState } from 'react';
const sections = [
  'Invocacion',
  'Calentamiento',
  'Kriya',
  'Relajacion',
  'Meditacion',
  'Cierre',
];

const Kriya = () => {
  const [cronometro, setCronometro] = useState('88:88:88');
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
      <h2 className={styles.cronometro}>{cronometro}</h2>
      <div className={styles.leftDiv}></div>
      <div className={styles.rightDiv}>
        <h3>Arma tu Kriya</h3>
        <div className={styles.innerWrapper}>
          <div className={styles.classStructure}>
            <div className={styles.elements}>
              {sections.map(section => (
                <KriyaElement
                  handleChooseSection={handleChooseSection}
                  name={section}
                />
              ))}
            </div>

            {selectedSection && (
              <div className={styles.chosenSection}>
                <span
                  onClick={() => {
                    setSelectedSection('');
                  }}
                  className={styles.closeCross}
                >
                  ❌
                </span>
                <h2>{selectedSection}</h2>
              </div>
            )}
          </div>
          <div className={styles.classDefinition}>
            <button onClick={handleNewExercize}>Nuevo Ejercicio</button>
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
                      {sections.map(section => (
                        <option value={section}>{section}</option>
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
