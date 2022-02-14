import styles from './styles.module.css';
import { useState } from 'react';
import { createUniqueId } from '../../lib/functions';
import { useRouter } from 'next/router';
import Button from '../Button';

const KriyaCommenter = ({ thisKriya }) => {
  const [commentElement, setCommentElement] = useState(null);

  const router = useRouter();

  const handleChange = e => {
    setCommentElement(before => ({
      ...before,
      [e.target.name]: e.target.value,
    }));
  };
  const submitKriyaCmmment = async () => {
    if (commentElement) {
      commentElement.id = createUniqueId();
      const reqParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kriyaId: thisKriya._id, commentElement }),
      };
      const res = await fetch('/api/kriyas', reqParams);
      const data = await res.json();
      router.push('/kriyas/success');
    }
  };
  const handleEndWithoutComment = async () => {
    router.push('/kriyas/success');
  };
  return (
    <div className={styles.blueBack}>
      <h3>Felicitaciones por terminar una nueva práctica!</h3>
      <div>
        <textarea
          onChange={handleChange}
          className={styles.commentArea}
          name='comment'
          placeholder='Agrega algún comentario si es que tienes'
        />
        <div>
          <input
            onChange={handleChange}
            name='commentAuthor'
            placeholder='Nombre'
            className={styles.commentInput}
          />
          <p>¿Cuál es tu nombre?</p>
        </div>
        {commentElement &&
        commentElement.comment &&
        commentElement.commentAuthor ? (
          <div
            className={
              commentElement &&
              commentElement.comment &&
              commentElement.commentAuthor
                ? styles.visible
                : styles.hidden
            }
          >
            <Button
              text='Agregar Comentario'
              actionOnClick={submitKriyaCmmment}
            />
          </div>
        ) : (
          <div
            className={
              commentElement &&
              commentElement.comment &&
              commentElement.commentAuthor
                ? styles.hidden
                : styles.visible
            }
          >
            <h2>Favor agrega un comentario y tu nombre para finalizar!</h2>
            <Button
              text='Terminar Sin Comentarios'
              actionOnClick={handleEndWithoutComment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default KriyaCommenter;
