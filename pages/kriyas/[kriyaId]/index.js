import styles from '../../../styles/Kriya.module.css';
import ActiveKriyaDisplay from '../../../components/ActiveKriyaDisplay';
import KriyaDisplay from '../../../components/KriyaDisplay';
import KriyaDescription from '../../../components/KriyaDescription';
import KriyaCommentsDisplay from '../../../components/KriyaCommentsDisplay';
import { useState, useRef } from 'react';
import { getCurrentUrl } from '../../../lib/functions';

export async function getServerSideProps(context) {
  const absoluteRoute = getCurrentUrl();
  let response = await fetch(
    `${absoluteRoute}/api/kriyas/${context.query.kriyaId}`
  );
  const fetchedKriya = await response.json();
  return {
    props: { fetchedKriya },
  };
}

const DisplayKriya = ({ fetchedKriya }) => {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [thisKriya, setThisKriya] = useState(fetchedKriya.kriya);
  const [currentEx, setCurrentEx] = useState({});
  const [startedKriya, setStartedKriya] = useState(false);

  const myRef = useRef(null);

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
          myRef={myRef}
        />
      </div>
      {(startedKriya || thisKriya.comments) && (
        <div className={styles.rightDiv} ref={myRef}>
          {startedKriya ? (
            <ActiveKriyaDisplay
              setThisKriya={setThisKriya}
              setCurrentExIndex={setCurrentExIndex}
              currentExIndex={currentExIndex}
              showStopwatch={showStopwatch}
              setShowStopwatch={setShowStopwatch}
              currentEx={currentEx}
              setCurrentEx={setCurrentEx}
              thisKriya={thisKriya}
            />
          ) : (
            <>
              {thisKriya.description && (
                <KriyaDescription description={thisKriya.description} />
              )}
              <KriyaCommentsDisplay comments={thisKriya.comments} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayKriya;
