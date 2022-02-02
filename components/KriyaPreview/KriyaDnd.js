import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import KriyaElementDraggable from '../KriyaElementDraggable';
import { useState } from 'react';
import fakeData from '../../lib/fakeData';
import styles from './styles.module.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const KriyaDnd = ({ thisKriya }) => {
  const [kriya, setKriya] = useState(fakeData);
  const handleKriyaSubmit = () => {
    // Before: Check if it has all of the sections
    if (checkIfAllExercizes(thisKriya.exercizes)) {
      return console.log('submit the kriya to DB');
    }
  };
  const checkIfAllExercizes = exs => {
    if (exs) {
      const sections = [
        'Invocacion',
        'Calentamiento',
        'Kriya',
        'Relajación',
        'Meditación',
        'Cierre',
      ];
      let availableSections = [];
      exs.forEach(ex => {
        if (!availableSections.includes(ex.section)) {
          availableSections.push(ex.section);
        }
      });
      if (availableSections.length === 6) {
        return true;
      }
    }
    const missing = sections.filter(x => !x.includes(availableSections));
    console.log('You are missing the following sections!', missing);
    return false;
  };
  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const newKriya = reorder(
      kriya,
      result.source.index,
      result.destination.index
    );
    setKriya(newKriya);
  };
  return (
    <div className={styles.mainContainer}>
      {thisKriya.name && thisKriya.author && (
        <h2>
          {thisKriya.name}
          <span className={styles.kriyaSignature}>
            {' '}
            Creado por {thisKriya.author}
          </span>
        </h2>
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            //Acá me quedé
            <p>Acá me quedé</p>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={handleKriyaSubmit}>Agregar Kriya</button>
    </div>
  );
};

export default KriyaDnd;
