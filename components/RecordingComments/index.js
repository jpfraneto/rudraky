import styles from './styles.module.css';

const RecordingComments = ({ comments }) => {
  return (
    <div className={styles.commentsContainer}>
      <h3>Acá van los comentarios:</h3>
      {comments &&
        comments.map(comment => {
          <div>
            <p>{comment.text}</p>
            <p>{comment.author}</p>
            <p>{comment.date}</p>
          </div>;
        })}
      <p>
        Mañana voy a implementar la funcionalidad para agregar comentarios a la
        clase :)
      </p>
    </div>
  );
};

export default RecordingComments;
