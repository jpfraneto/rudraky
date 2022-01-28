import styles from '../styles/Kriya.module.css';
import ActiveKriyaDisplay from '../components/ActiveKriyaDisplay';
import KriyaDisplay from '../components/KriyaDisplay';
import Stopwatch from '../components/Stopwatch';
import { useState, useRef } from 'react';
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
    description: 'Ong namo gurudev namo',
    name: 'Adi Mantra',
    duration: 88,
    complete: false,
  },
  {
    section: 'Calentamiento',
    name: 'Respiracion de Fuego',
    description: 'Respiración desde el abdomen bombeando el punto abdominal',
    duration: 188,
    complete: false,
  },
  {
    section: 'Calentamiento',
    name: 'Saludos al Sol',
    duration: '3',
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
    duration: '108',
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
    name: 'Eterno Sol',
    duration: '3',
    complete: false,
  },
];

const Kriya = () => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [thisKriya, setThisKriya] = useState(chosenKriya);
  const [currentEx, setCurrentEx] = useState({});
  const [showNewExercize, setShowNewExercize] = useState(false);
  const [newEx, setNewEx] = useState({});
  const [startedKriya, setStartedKriya] = useState(false);

  const activeKriyaRef = useRef(null);

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
      <div className={styles.leftDiv}>
        <KriyaDisplay
          activeKriyaRef={activeKriyaRef}
          setShowStopwatch={setShowStopwatch}
          thisKriya={thisKriya}
          setCurrentEx={setCurrentEx}
          currentExIndex={currentExIndex}
          setCurrentExIndex={setCurrentExIndex}
          setStartedKriya={setStartedKriya}
          startedKriya={startedKriya}
        />
      </div>
      {startedKriya && (
        <div ref={activeKriyaRef} className={styles.rightDiv}>
          <ActiveKriyaDisplay
            setCurrentExIndex={setCurrentExIndex}
            currentExIndex={currentExIndex}
            showStopwatch={showStopwatch}
            setShowStopwatch={setShowStopwatch}
            currentEx={currentEx}
            currentExIndex={currentExIndex}
            setCurrentEx={setCurrentEx}
            thisKriya={thisKriya}
          />
        </div>
      )}
    </div>
  );
};

export default Kriya;
