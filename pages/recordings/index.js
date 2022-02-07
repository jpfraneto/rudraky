import Link from 'next/link';
import RecordingCard from '../../components/RecordingCard';
import styles from '../../styles/RecordingsList.module.css';

export async function getStaticProps(context) {
  const res = await fetch(`https://www.rudraky.com/api/recordings`);
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
