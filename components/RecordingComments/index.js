import styles from './styles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUniqueId } from '../../lib/functions';

const RecordingComments = ({ commentsProp }) => {
  const [comments, setComments] = useState(commentsProp);
  const [commentFormDisplay, setCommentFormDisplay] = useState(false);
  const [newComment, setNewComment] = useState(null);
  const router = useRouter();

  const handleChange = e => {
    setNewComment(prevComment => ({
      ...prevComment,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCommentSubmit = async () => {
    if (newComment) {
      newComment.id = createUniqueId();
      const reqParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordingId: router.query.id, newComment }),
      };
      const res = await fetch(`/api/recordings`, reqParams);
      const data = await res.json();
      setComments(prevComments => [...prevComments, newComment]);
    }
  };
  return (
    <div className={styles.commentsContainer}>
      <h3>Comentarios de Esta Clase:</h3>
      {comments ? (
        comments.map(comment => {
          <div>
            <p>{comment.text}</p>
            <p>{comment.author}</p>
            <p>{comment.date}</p>
          </div>;
        })
      ) : (
        <p>Aún no hay Comentarios</p>
      )}
      {commentFormDisplay ? (
        <div className={styles.newCommentContainer}>
          <div>
            <p>Agrega un nuevo comentario para esta clase:</p>
            <textarea
              name='comment'
              onChange={handleChange}
              placeholder='Agrega comentario'
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
            <button onClick={handleCommentSubmit}>Agregar Comentario</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setCommentFormDisplay(true);
          }}
        >
          Nuevo Comentario
        </button>
      )}
    </div>
  );
};

export default RecordingComments;
