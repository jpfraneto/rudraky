import { getCurrentUrl } from '../../../lib/functions';
import { useState } from 'react';

const EditKriya = ({ data }) => {
  const [kriya, setKriya] = useState(data);
  return (
    <>
      {' '}
      <h3>
        get the information for the following kriya and create a form for
        updating it!
      </h3>
      <button onClick={() => console.log(kriya)}>Print Kriya</button>
    </>
  );
};

export async function getServerSideProps(context) {
  const urlForFetching = `${getCurrentUrl()}/api/kriyas/${
    context.query.kriyaId
  }`;
  const response = await fetch(urlForFetching);
  const data = await response.json();
  return {
    props: { data },
  };
}

export default EditKriya;
