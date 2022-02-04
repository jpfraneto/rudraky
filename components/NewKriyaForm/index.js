import NewExercize from '../NewExercize/NewExercize';
import styles from './styles.module.css';

const NewKriyaForm = ({ kriya, setKriya, setMissing, missing }) => {
  const handleChange = e => {
    setKriya(prevKriya => {
      return { ...prevKriya, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className={styles.container}>
      <h2>Arma Tu Kriya</h2>
      Nombre Kriya:{' '}
      <input
        type='text'
        placeholder='Nombre del Kriya'
        name='name'
        value={kriya.name}
        onChange={handleChange}
      />{' '}
      <br />
      Autor:{' '}
      <input
        type='text'
        placeholder='Autor'
        name='author'
        value={kriya.author}
        onChange={handleChange}
      />
      <NewExercize setKriya={setKriya} setMissing={setMissing} />
      {missing.length > 0 && (
        <div>
          <h3>Faltan las siguientes secciones en la clase:</h3>
          <ul className={styles.missingList}>
            {missing.map((section, index) => {
              return <li key={`${section}index`}>{section}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewKriyaForm;
