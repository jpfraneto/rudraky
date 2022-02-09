import Moment from 'react-moment';
import styles from './styles.module.css';
import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';
import RecordingComments from '../RecordingComments';

const RecordingDisplay = ({ recording }) => {
  console.log('the recording is: ', recording);
  const router = useRouter();
  return (
    <div className={styles.recordingContainer}>
      <Image
        src='/images/clases/clase-fernando-igor-072022II.png'
        width={600}
        height={300}
        alt='Clase de Fernando Igor'
      />
      <p>
        <strong>Profesor: </strong> {recording.profesor}
      </p>
      <p>
        <strong>Fecha: </strong>
        <Moment date={recording.date} />
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
      <br />
      <Button text='Volver' actionOnClick={() => router.push('/recordings')} />
      <RecordingComments commentsProp={recording.comments} />
    </div>
  );
};

export default RecordingDisplay;
