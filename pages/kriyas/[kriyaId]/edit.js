const EditKriya = ({ kriyaId }) => {
  console.log('the kriyaId is: ', kriyaId);
  return (
    <h3>
      get the information for the following kriya {kriyaId} and create a form
      for updating it!
    </h3>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query.kriyaId);
  return {
    props: { kriyaId: context.query.kriyaId },
  };
}

export default EditKriya;
