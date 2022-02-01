const List = ({ provided, ref, children }) => {
  return (
    <div {...provided.droppableProps} ref={ref}>
      {children}
    </div>
  );
};

export default List;
