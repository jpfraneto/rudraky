import NewExercize from '../NewExercize/NewExercize';
import styles from './styles.module.css';

const NewKriyaForm = ({ setKriya }) => {
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
        onChange={handleChange}
      />{' '}
      <br />
      Autor:{' '}
      <input
        type='text'
        placeholder='Autor'
        name='author'
        onChange={handleChange}
      />
      <NewExercize setKriya={setKriya} />
    </div>
  );
};

export default NewKriyaForm;
