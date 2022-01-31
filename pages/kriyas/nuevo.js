import NewKriyaForm from '../../components/NewKriyaForm';
import KriyaPreview from '../../components/KriyaPreview';
import styles from '../../styles/NewKriya.module.css';
import { useState } from 'react';

const NuevoKriya = () => {
  const [kriya, setKriya] = useState({ exercizes: [] });
  return (
    <div className={styles.kriyaFormContainer}>
      <NewKriyaForm setKriya={setKriya} kriya={kriya} />
      <KriyaPreview thisKriya={kriya} />
    </div>
  );
};

export default NuevoKriya;
