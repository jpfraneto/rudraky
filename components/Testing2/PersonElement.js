const PersonElement = ({ person, provided }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {person.name}
    </div>
  );
};

export default PersonElement;
