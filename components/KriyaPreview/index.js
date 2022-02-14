import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { AiOutlineConsoleSql, AiTwotoneDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const KriyaPreview = ({ kriya, setKriya, missing, setMissing }) => {
  const [winReady, setWinReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setWinReady(true);
  }, []);

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

  const handleDelete = id => {
    setKriya(prevKriya => {
      const deletedEx = null;
      const updatedKriya = {
        ...prevKriya,
        exercizes: prevKriya.exercizes.filter(ex => {
          if (ex.id === id) deletedEx = ex;
          return ex.id !== id;
        }),
      };

      const sectionsIntersection = updatedKriya.exercizes.filter(ex => {
        return ex.section === deletedEx.section;
      });
      if (sectionsIntersection.length === 0) {
        if (deletedEx.section)
          setMissing(prevMissing => {
            return [...prevMissing, deletedEx.section];
          });
      }
      return updatedKriya;
    });
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
                            className={styles.ejercicioContainer}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className={styles.ejercicio}>
                              <span className={styles.sectionSpan}>
                                {ex.section}{' '}
                              </span>
                              <span className={styles.nameSpan}>
                                {ex.exName}
                              </span>
                              <span className={styles.durationSpan}>
                                {ex.exDuration}
                              </span>
                            </div>
                            <div className={styles.ejercicioOptions}>
                              {/* <span onClick={() => handleEdit(ex.id)}>
                                <FaEdit />
                              </span> */}
                              <span onClick={() => handleDelete(ex.id)}>
                                <AiTwotoneDelete />
                              </span>
                            </div>
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
        </div>
      ) : null}
    </>
  );
};

export default KriyaPreview;
