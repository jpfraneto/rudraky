import NewKriyaForm from '../../components/NewKriyaForm';
import KriyaPreview from '../../components/KriyaPreview';
import Button from '../../components/Button';
import styles from '../../styles/NewKriya.module.css';
import { useState } from 'react';
import fakeData from '../../lib/fakeData';
import { useRouter } from 'next/router';

const checkWhatIsMissing = exs => {
  const sections = [
    'Invocación',
    'Calentamiento',
    'Kriya',
    'Relajación',
    'Meditación',
    'Cierre',
  ];
  if (exs) {
    let presentSections = [];
    exs.forEach(ex => {
      if (!presentSections.includes(ex.section)) {
        presentSections.push(ex.section);
      }
    });
    if (presentSections.length === 6) {
      return [];
    }
    const missingSections = sections.filter(x => !presentSections.includes(x));
    return missingSections;
  }
  return sections;
};

const NuevoKriya = () => {
  const [kriya, setKriya] = useState(fakeData);
  const [missing, setMissing] = useState(checkWhatIsMissing(kriya.exercizes));

  const router = useRouter();

  const handleKriyaSubmit = async () => {
    if (missing.length === 0) {
      //send kriya to db
      const reqParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kriya),
      };
      const response = await fetch('/api/kriyas', reqParams);
      const res = await response.json();
      router.push(`/kriyas/${res.kriyaId}`);
    }
  };
  return (
    <>
      <div className={styles.kriyaFormContainer}>
        <NewKriyaForm
          setKriya={setKriya}
          kriya={kriya}
          setMissing={setMissing}
          missing={missing}
        />
        <KriyaPreview
          setKriya={setKriya}
          kriya={kriya}
          setMissing={setMissing}
          missing={missing}
        />
      </div>
      <div className={styles.newKriyaBtnContainer}>
        {missing.length === 0 && (
          <Button text='Agregar Kriya' actionOnClick={handleKriyaSubmit} />
        )}
      </div>
    </>
  );
};

export default NuevoKriya;
