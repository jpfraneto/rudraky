import Moment from 'react-moment';
import styles from './styles.module.css';

const KriyaCommentsDisplay = ({ comments }) => {
  return (
    <div className={styles.container}>
      {comments &&
        comments.map(comment => {
          return (
            <div className={styles.commentContainer} key={comment.id}>
              <p>
                <strong>{comment.commentAuthor}</strong>
              </p>
              <p>{comment.comment}</p>
              {comment.date && <Moment date={comment.date} />}
            </div>
          );
        })}
    </div>
  );
};

export default KriyaCommentsDisplay;
