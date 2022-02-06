import styles from '../../styles/Kriya.module.css';
import { useRouter } from 'next/router';
import ActiveKriyaDisplay from '../../components/ActiveKriyaDisplay';
import KriyaDisplay from '../../components/KriyaDisplay';
import KriyaCommentsDisplay from '../../components/KriyaCommentsDisplay';
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
  const [thisKriya, setThisKriya] = useState(fetchedKriya);
  const [currentEx, setCurrentEx] = useState({});
  const [startedKriya, setStartedKriya] = useState(false);

  const handleGetKriyasFromDB = async () => {
    const res = await fetch('/api/kriyas');
    const data = await res.json();
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
          setThisKriya={setThisKriya}
        />
      </div>
      {startedKriya && (
        <div className={styles.rightDiv}>
          <ActiveKriyaDisplay
            setThisKriya={setThisKriya}
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
      {!startedKriya && thisKriya.comments && (
        <div className={styles.commentsContainer}>
          <KriyaCommentsDisplay comments={thisKriya.comments} />
        </div>
      )}
    </div>
  );
};

export default DisplayKriya;
