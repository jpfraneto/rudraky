const Discourse = () => {
  const handleFetch = async () => {
    const res = await fetch('/api/users/discoursesso');
    const data = await res.json();
    console.log('the data is: ', data);
  };
  return (
    <div>
      <h2>This is the discourse page</h2>
      <button type='button' onClick={handleFetch}>
        Fetch the route
      </button>
    </div>
  );
};

export default Discourse;
