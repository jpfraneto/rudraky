import NewKriyaForm from '../../components/NewKriyaForm';
import KriyaPreview from '../../components/KriyaPreview';
import styles from '../../styles/NewKriya.module.css';
import { useState } from 'react';
import fakeData from '../../lib/fakeData';

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

  return (
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
  );
};

export default NuevoKriya;
