import styles from './styles.module.css';
import Link from 'next/link';
import Moment from 'react-moment';

const RecordingCard = ({ recording }) => {
  return (
    <div className={styles.recordingCardContainer} key={recording._id}>
      <Link href={`/recordings/${recording._id}`}>
        <div>
          <p>
            <strong>Profesor: </strong> {recording.profesor}
          </p>
          <p>
            <strong>Kriya: </strong> {recording.kriya}
          </p>
          <p>
            <strong>Fecha: </strong>{' '}
            <Moment format={'DD/MM/YYYY hh:mm:ss'} date={recording.date} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RecordingCard;
