import RecordingDisplay from '../../components/RecordingDisplay';

export async function getServerSideProps(context) {
  return {
    props: {
      recording: context.query,
    },
  };
}

const RecordingPage = ({ recording }) => {
  return (
    <>{recording ? <RecordingDisplay recording={recording} /> : <p>False</p>}</>
  );
};

export default RecordingPage;
