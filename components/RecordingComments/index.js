import styles from './styles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../Spinner';
import { createUniqueId } from '../../lib/functions';
import Moment from 'react-moment';
import Button from '../Button';

const RecordingComments = ({ commentsProp }) => {
  const [comments, setComments] = useState(commentsProp || []);
  const [commentFormDisplay, setCommentFormDisplay] = useState(false);
  const [newComment, setNewComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setNewComment(prevComment => ({
      ...prevComment,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCommentSubmit = async () => {
    if (newComment) {
      setLoading(true);
      newComment.id = createUniqueId();
      const reqParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordingId: router.query.id, newComment }),
      };
      const res = await fetch(`/api/recordings`, reqParams);
      const data = await res.json();
      setComments(prevComments => [...prevComments, newComment]);
      setLoading(false);
      setCommentFormDisplay(false);
      setNewComment({});
    }
  };
  return (
    <div className={styles.commentsContainer}>
      <h3>Comentarios de Esta Clase:</h3>

      {comments.map(comment => {
        return (
          <div key={comment._id} className={styles.individualCommentContainer}>
            <p>{comment.comment}</p>
            <p>
              <strong>{comment.commenterName}</strong>
            </p>
            <Moment
              className={styles.dateDisplayFormat}
              format={'DD/MM/YYYY hh:mm:ss'}
              date={comment.date || new Date()}
            />
            <hr className={styles.horizontalRule} />
          </div>
        );
      })}

      {commentFormDisplay ? (
        loading ? (
          <Spinner />
        ) : (
          <div className={styles.newCommentContainer}>
            <div>
              <p>Nuevo Comentario:</p>
              <textarea
                name='comment'
                onChange={handleChange}
                placeholder='Lo que quieras comentar.'
              />
            </div>
            <div>
              <p>¿Quién eres?</p>
              <input
                onChange={handleChange}
                name='commenterName'
                placeholder='Tu Nombre'
              />
            </div>
            <div>
              <br />
              <Button
                text='Agregar Comentario'
                actionOnClick={handleCommentSubmit}
              />
              <Button
                text='Cancelar'
                actionOnClick={() => setCommentFormDisplay(false)}
              />
            </div>
          </div>
        )
      ) : (
        <>
          <Button
            text='Nuevo Comentario'
            actionOnClick={() => setCommentFormDisplay(true)}
          />
        </>
      )}
    </div>
  );
};

export default RecordingComments;
