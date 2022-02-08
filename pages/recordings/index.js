import Link from 'next/link';
import RecordingCard from '../../components/RecordingCard';
import styles from '../../styles/RecordingsList.module.css';
import { getCurrentUrl } from '../../lib/functions';

export async function getStaticProps(context) {
  const route = getCurrentUrl();
  const res = await fetch(`${route}/api/recordings`);
  const recordings = await res.json();
  return {
    props: {
      recordings,
    },
  };
}

const Recordings = ({ recordings }) => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.recordingsList}>
        {recordings.map(recording => (
          <RecordingCard key={recording._id} recording={recording} />
        ))}
      </div>
    </div>
  );
};

export default Recordings;
