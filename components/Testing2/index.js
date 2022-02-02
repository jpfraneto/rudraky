import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import { useState, useEffect } from 'react';

const people = [
  { name: 'juana', id: 'juanita' },
  { name: 'clara', id: 'clarita' },
  { name: 'jaime', id: 'jaimico' },
  { name: 'mariana', id: 'marianita' },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Testing2 = () => {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  const [persons, setPersons] = useState(people);
  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const newPersons = reorder(
      persons,
      result.source.index,
      result.destination.index
    );
    setPersons(newPersons);
  };
  return (
    <>
      {winReady ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided, snapshot) => (
              <List persons={persons} provided={provided} />
            )}
          </Droppable>
        </DragDropContext>
      ) : null}
    </>
  );
};

const TestingWorks = () => {
  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const newPersons = reorder(
      persons,
      result.source.index,
      result.destination.index
    );
    setPersons(newPersons);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {persons.map((person, index) => (
              <Draggable key={person.id} draggableId={person.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {person.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Testing2;
