import styles from './styles.module.css';
import { useState } from 'react';

const NewExercize = ({ setKriya }) => {
  const [ex, setEx] = useState({});
  const handleChange = e => {
    setEx(prevEx => {
      return { ...prevEx, [e.target.name]: e.target.value };
    });
  };
  const handleAddExercize = () => {
    setKriya(prevKriya => {
      if (prevKriya.exercizes) {
        return { ...prevKriya, exercizes: [...prevKriya.exercizes, ex] };
      } else {
        return { ...prevKriya, exercizes: [ex] };
      }
    });
  };

  return (
    <div className={styles.exContainer}>
      <p>Agrega un Nuevo Ejercicio</p>
      <select name='section' onChange={handleChange}>
        <option>Elegir Sección de la Clase</option>
        <option value='Invocación'>Invocación</option>
        <option value='Calentamiento'>Calentamiento</option>
        <option value='Kriya'>Kriya</option>
        <option value='Relajación'>Relajación</option>
        <option value='Meditación'>Meditación</option>
        <option value='Cierre'>Cierre</option>
      </select>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Nombre Ejercicio'
        name='exName'
      />
      <input
        onChange={handleChange}
        type='number'
        min={0}
        placeholder='Duración'
        name='exDuration'
      />
      <select name='durationType' onChange={handleChange}>
        <option value='Segundos'>Segundos</option>
        <option value='Repeticiones'>Repeticiones</option>
      </select>
      <button onClick={handleAddExercize}>Agregar Ejercicio</button>
    </div>
  );
};

export default NewExercize;
