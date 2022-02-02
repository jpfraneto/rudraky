import PersonElement from './PersonElement';
import { Draggable } from 'react-beautiful-dnd';

const List = ({ persons, provided }) => {
  return (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      style={{
        backgroundColor: 'blue',
        display: 'inline-block',
        marginLeft: '300px',
        marginTop: '88px',
        textAlign: 'center',
      }}
    >
      {persons.map((person, index) => (
        <Draggable key={person.id} draggableId={person.id} index={index}>
          {(provided, snapshot) => (
            <PersonElement person={person} provided={provided} />
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  );
};

export default List;
