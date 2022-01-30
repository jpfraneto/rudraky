import styles from '../../styles/Kriya.module.css';
import { useRouter } from 'next/router';
import ActiveKriyaDisplay from '../../components/ActiveKriyaDisplay';
import KriyaDisplay from '../../components/KriyaDisplay';
import { useState, useRef } from 'react';

export async function getServerSideProps(context) {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  let response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/kriyas/${context.query.kriyaId}`
  );
  const fetchedKriya = await response.json();
  return {
    props: { fetchedKriya },
  };
}

const DisplayKriya = ({ fetchedKriya }) => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [thisKriya, setThisKriya] = useState(fetchedKriya.content);
  const [currentEx, setCurrentEx] = useState({});
  const [showNewExercize, setShowNewExercize] = useState(false);
  const [newEx, setNewEx] = useState({});
  const [startedKriya, setStartedKriya] = useState(false);

  const handleChooseSection = name => {
    setSelectedSection(name);
  };

  const handleNewExercize = () => {
    setShowNewExercize(!showNewExercize);
  };

  const handleNewName = e => {
    setNewEx(ex => setNewEx({ ...ex, name: e.target.value }));
  };

  const handlePrinter = e => {};

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

  const handleGetKriyasFromDB = async () => {
    const res = await fetch('/api/kriyas');
    const data = await res.json();
    console.log('the data is: ', data);
  };

  const handleAddKriyaToDB = async () => {
    const kriyaInfo = chosenKriya;
    console.log('the kriya info is: ', kriyaInfo);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(kriyaInfo),
    };
    const res = await fetch('/api/kriyas', requestOptions);
    const data = await res.json();
    console.log(
      'the answer from the server after posting the kriya is: ',
      data
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <KriyaDisplay
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
        <div className={styles.rightDiv}>
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

export default DisplayKriya;
