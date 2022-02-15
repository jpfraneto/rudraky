import styles from './styles.module.css';

const KriyaDescription = ({ description }) => {
  return (
    <div className={styles.descriptionContainer}>
      <h3>Descripción:</h3>
      <p>{description}</p>
    </div>
  );
};

export default KriyaDescription;
