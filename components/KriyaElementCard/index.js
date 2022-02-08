import Link from 'next/link';
import styles from './styles.module.css';
import { FaRegCommentDots } from 'react-icons/fa';

const KriyaElementCard = ({ kriya }) => {
  return (
    <div className={styles.kriyaElementDisplayContainer}>
      <Link href={`/kriyas/${kriya._id}`}>
        <a>
          {' '}
          <h3>{kriya.name}</h3>
          <h5>Creado por {kriya.author}</h5>
          <span className={styles.commentsElement}>
            {kriya.comments ? kriya.comments.length : '0'} <FaRegCommentDots />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default KriyaElementCard;
