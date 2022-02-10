import RecordingDisplay from '../../components/RecordingDisplay';
import { getCurrentUrl } from '../../lib/functions';

export async function getServerSideProps(context) {
  const absoluteRoute = getCurrentUrl();
  const res = await fetch(
    `${absoluteRoute}/api/recordings/${context.query.recordingId}`
  );
  const fetchedRecording = await res.json();
  return {
    props: {
      recording: fetchedRecording,
    },
  };
}

const RecordingPage = ({ recording }) => {
  return (
    <>{recording ? <RecordingDisplay recording={recording} /> : <p>False</p>}</>
  );
};

export default RecordingPage;
