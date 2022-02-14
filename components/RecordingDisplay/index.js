import Moment from 'react-moment';
import styles from './styles.module.css';
import Button from '../Button';
import { useRouter } from 'next/router';
import RecordingComments from '../RecordingComments';

const RecordingDisplay = ({ recording }) => {
  const router = useRouter();
  return (
    <div className={styles.recordingContainer}>
      <p>
        <strong>Profesor: </strong> {recording.profesor}
      </p>
      <p>
        <strong>Fecha: </strong>
        <Moment format={'DD/MM/YYYY hh:mm:ss'} date={recording.date} />
      </p>
      <p>
        <strong>Link Zoom: </strong>
        <a
          style={{ color: 'blue' }}
          target='_blank'
          rel='noreferrer'
          href={recording.zoomLink}
        >
          Ir a la Grabación
        </a>
      </p>
      <p>
        <strong>Clave Zoom: </strong>
        {recording.zoomPassword}
      </p>
      <Button text='Volver' actionOnClick={() => router.push('/recordings')} />
      <RecordingComments commentsProp={recording.comments} />
    </div>
  );
};

export default RecordingDisplay;
