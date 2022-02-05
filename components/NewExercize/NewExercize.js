import styles from './styles.module.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const createId = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  return small_id;
};

const NewExercize = ({ setKriya, setMissing }) => {
  const [ex, setEx] = useState({
    durationType: 'Segundos',
  });
  const handleChange = e => {
    setEx(prevEx => {
      return { ...prevEx, [e.target.name]: e.target.value };
    });
  };
  const handleAddExercize = () => {
    setEx(prevEx => ({ ...prevEx, id: createId() }));
    setMissing(prevMissing => {
      if (!prevMissing.includes(ex.section)) {
        return prevMissing;
      }
      const index = prevMissing.indexOf(ex.section);
      prevMissing.splice(index, 1);
      return prevMissing;
    });
    setKriya(prevKriya => {
      ex.id = createId();
      if (prevKriya.exercizes) {
        return { ...prevKriya, exercizes: [...prevKriya.exercizes, ex] };
      } else {
        return { ...prevKriya, exercizes: [ex] };
      }
    });
  };

  return (
    <div className={styles.exContainer}>
      <button onClick={() => console.log(ex)}>The ex is: </button>
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
      <textarea
        className={styles.textareaElement}
        placeholder='Describe el ejercicio'
        name='descripcion'
        onChange={handleChange}
      />
      <button onClick={handleAddExercize}>Agregar</button>
    </div>
  );
};

export default NewExercize;
