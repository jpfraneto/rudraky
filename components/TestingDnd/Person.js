const Person = ({ provided, innerRef, name }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      'I am {name}, I think'
    </div>
  );
};

export default Person;
