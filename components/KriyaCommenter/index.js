import styles from './styles.module.css';
import { useState } from 'react';

const KriyaCommenter = ({ thisKriya }) => {
  const [commentElement, setCommentElement] = useState(null);
  const handleChange = e => {
    setCommentElement(before => ({
      ...before,
      [e.target.name]: e.target.value,
    }));
  };
  const submitKriyaCmmment = async () => {
    const reqParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kriyaId: thisKriya._id, commentElement }),
    };
    const res = await fetch('/api/kriyas', reqParams);
    const data = await res.json();
    console.log('the data from the response is: ', data);
  };
  return (
    <div className={styles.blueBack}>
      <div>
        <textarea
          onChange={handleChange}
          className={styles.commentArea}
          name='comment'
          placeholder='Agrega tu Comentario de la Práctica'
        />
        <div>
          <input
            onChange={handleChange}
            name='commentAuthor'
            className={styles.commentInput}
          />
          <p>¿Cuál es tu nombre?</p>
        </div>
        <button onClick={submitKriyaCmmment}>Agregar Comentario</button>
      </div>
    </div>
  );
};

export default KriyaCommenter;
