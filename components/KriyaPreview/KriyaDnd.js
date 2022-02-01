import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import KriyaElementDraggable from '../KriyaElementDraggable';
import styles from './styles.module.css';

const KriyaDnd = ({ thisKriya }) => {
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
    alert('reorder the list!');
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

      {/* <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {provided => {
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.kriyaNavbar}
            >
              {thisKriya.exercizes.map((ex, i) => (
                <KriyaElementDraggable key={ex.id} index={i} ex={ex} />
              ))}
              {provided.placeholder}
            </div>;
          }}
        </Droppable>
      </DragDropContext> */}
      <div>
        <Droppable droppableId='droppable-1'>
          {provided => {
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h3>I am a droppable!</h3>
              {provided.placeholder}
            </div>;
          }}
        </Droppable>
      </div>

      <button onClick={handleKriyaSubmit}>Agregar Kriya</button>
    </div>
  );
};

export default KriyaDnd;
