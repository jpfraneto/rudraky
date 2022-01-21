import styles from './styles.module.css';
import Image from 'next/image';
import Moment from 'react-moment';

const NewKriya = ({ name }) => {
  const now = new Date();

  return (
    <div className={styles.component}>
      <div className={styles.userImageContainer}>
        <Image
          className={styles.userImage}
          src='/images/sebaparra.jpeg'
          width={100}
          height={100}
        />
      </div>
      <div styles={styles.kriyaInformationContainer}>
        <div className={styles.kriyaInfo}>
          <p>{name}</p>
          <Moment>{now}</Moment>
          <p>Comentarios: 0</p>
        </div>
        <div className={styles.summary}>
          <h3>30/40</h3>
        </div>
      </div>
    </div>
  );
};

export default NewKriya;
