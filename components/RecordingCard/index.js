import styles from './styles.module.css';
import Link from 'next/link';
import Moment from 'react-moment';
import { FaRegCommentDots } from 'react-icons/fa';

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
          <span>
            <strong style={{ fontSize: '1.6rem' }}>
              {recording.comments ? recording.comments.length : '0'}{' '}
              <FaRegCommentDots />
            </strong>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default RecordingCard;
