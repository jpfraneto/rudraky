import Moment from 'react-moment';
import styles from './styles.module.css';

const KriyaCommentsDisplay = ({ comments }) => {
  return (
    <div className={styles.container}>
      {comments && (
        <div>
          <h3 className={styles.fixedText}>Comentarios</h3>
          {comments.map(comment => {
            return (
              <div className={styles.commentContainer} key={comment.id}>
                <p>
                  <strong>{comment.commentAuthor}</strong>
                </p>
                <p>{comment.comment}</p>
                {comment.date && (
                  <Moment
                    format='DD/MM/YYYY hh:mm:ss'
                    date={comment.date}
                    className={styles.dateFormatting}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default KriyaCommentsDisplay;
