import NewKriyaForm from '../../components/NewKriyaForm';
import KriyaPreview from '../../components/KriyaPreview';
import KriyaDnd from '../../components/KriyaPreview/KriyaDnd';
import styles from '../../styles/NewKriya.module.css';
import { useState } from 'react';

const NuevoKriya = () => {
  const [kriya, setKriya] = useState({
    exercizes: [
      {
        section: 'Invocación',
        exName: 'Adi Mantra',
        exDuration: '3',
        durationType: 'Repeticiones',
        id: 213,
      },
      {
        section: 'Calentamiento',
        exName: 'Respiración de Fuego',
        exDuration: '3',
        durationType: 'Repeticiones',
        id: 111,
      },
      {
        section: 'Calentamiento',
        exName: 'Giro Sufi',
        exDuration: '3',
        durationType: 'Repeticiones',
        id: 231,
      },
      {
        section: 'Calentamiento',
        exName: 'Saludo Al Sol',
        exDuration: '3',
        durationType: 'Repeticiones',
        id: 234,
      },
    ],
  });
  return (
    <div className={styles.kriyaFormContainer}>
      <NewKriyaForm setKriya={setKriya} kriya={kriya} />
      {/* <KriyaPreview thisKriya={kriya} /> */}
      <KriyaDnd thisKriya={kriya} />
    </div>
  );
};

export default NuevoKriya;
