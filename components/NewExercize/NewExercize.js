import styles from './styles.module.css';
import { useState } from 'react';
import { createUniqueId } from '../../lib/functions';

const NewExercize = ({ kriya, setKriya, setMissing }) => {
  const [ex, setEx] = useState({
    durationType: 'Segundos',
    id: createUniqueId(),
  });
  const handleChange = e => {
    setEx(prevEx => {
      return { ...prevEx, [e.target.name]: e.target.value };
    });
  };
  const handleAddExercize = () => {
    if (!(ex.section && ex.exName && ex.exDuration))
      return alert('there are missing parts of the exercize!');
    setMissing(prevMissing => {
      if (!prevMissing.includes(ex.section)) {
        return prevMissing;
      }
      const index = prevMissing.indexOf(ex.section);
      prevMissing.splice(index, 1);
      return prevMissing;
    });
    setKriya(prevKriya => {
      ex.id = createUniqueId();
      if (prevKriya.exercizes) {
        return { ...prevKriya, exercizes: [...prevKriya.exercizes, ex] };
      } else {
        return { ...prevKriya, exercizes: [ex] };
      }
    });
    setEx(prevEx => ({
      section: prevEx.section,
      durationType: 'Segundos',
      id: createUniqueId(),
      exName: '',
      descripcion: '',
      exDuration: 0,
    }));
  };

  return (
    <div className={styles.exContainer}>
      <p>Agrega un Nuevo Ejercicio</p>
      <select name='section' onChange={handleChange} value={ex.section}>
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
        value={ex.exName}
        type='text'
        placeholder='Nombre Ejercicio'
        name='exName'
      />
      <input
        onChange={handleChange}
        value={ex.exDuration}
        type='number'
        min={0}
        placeholder='Duración'
        name='exDuration'
      />
      <select
        name='durationType'
        value={ex.durationType}
        onChange={handleChange}
      >
        <option value='Segundos'>Segundos</option>
        <option value='Repeticiones'>Repeticiones</option>
      </select>
      <textarea
        className={styles.textareaElement}
        value={ex.descripcion}
        placeholder='Describe el ejercicio'
        name='descripcion'
        onChange={handleChange}
      />
      <button onClick={handleAddExercize}>Agregar</button>
    </div>
  );
};

export default NewExercize;
