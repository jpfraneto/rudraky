import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const KriyaPreview = ({ kriya, setKriya, missing, setMissing }) => {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);
  const handleKriyaSubmit = () => {
    // Before: Check if it has all of the sections
    if (checkIfAllExercizes(kriya.exercizes)) {
      return console.log('submit the kriya to DB');
    }
  };

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const newExercizes = reorder(
      kriya.exercizes,
      result.source.index,
      result.destination.index
    );
    setKriya({ ...kriya, exercizes: newExercizes });
  };
  return (
    <>
      {winReady ? (
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            {kriya.name && kriya.author && (
              <h2>
                {kriya.name}
                <span className={styles.kriyaSignature}>
                  {' '}
                  Creado por {kriya.author}
                </span>
              </h2>
            )}
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='droppable'>
              {(provided, snapshot) => (
                <div
                  className={styles.previewExercizesContainer}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {kriya.exercizes.map((ex, index) => {
                    return (
                      <Draggable key={ex.id} draggableId={ex.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            className={styles.ejercicio}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <span className={styles.sectionSpan}>
                              {ex.section}{' '}
                            </span>
                            <span className={styles.nameSpan}>{ex.exName}</span>
                            <span className={styles.durationSpan}>
                              {ex.exDuration}
                            </span>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className={styles.newKriyaBtnContainer}>
            {missing.length === 0 && (
              <button
                className={styles.newKriyaBtn}
                onClick={handleKriyaSubmit}
              >
                Agregar Kriya
              </button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default KriyaPreview;
