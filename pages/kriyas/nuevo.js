const NuevoKriya = () => {
  const handleFormSubmit = async e => {
    e.preventDefault();

    // const res = await fetch('/api/kriya', { post });
  };
  return (
    <div>
      <p>
        This is the page for creating a new kriya, which will be saved in the db
        and accesed in the page kriyas to run a new one!
      </p>
      <form action='' onSubmit={handleFormSubmit}>
        {/* all the exercizes go here, with the person that is creating the kriya. */}
      </form>
    </div>
  );
};

export default NuevoKriya;
