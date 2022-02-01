import { Draggable } from 'react-beautiful-dnd';
import styles from './styles.module.css';

const KriyaElementDraggable = ({ ex, index, ref }) => {
  return (
    <Draggable draggableId={ex.id} index={index}>
      {provided => {
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.ejercicio}
        >
          {/* <span className={styles.sectionSpan}>{ex.section} </span>
          <span className={styles.nameSpan}>{ex.exName} </span>
          <span className={styles.durationSpan}>
            {`${ex.exDuration} ${ex.durationType}`}
          </span> */}
          <h3>My Draggable</h3>
        </div>;
      }}
    </Draggable>
  );
};

export default KriyaElementDraggable;
