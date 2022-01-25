import styles from './styles.module.css';

const KriyaElement = ({ handleChooseSection, name }) => {
  return (
    <div onClick={() => handleChooseSection(name)} className={styles.container}>
      {name}
    </div>
  );
};

export default KriyaElement;
