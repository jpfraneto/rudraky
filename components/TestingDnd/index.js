import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './styles.module.css';
import Person from './Person';
import List from './List';
import { useState, useEffect } from 'react';
import initialData from './initialData';

const TestingDnd = () => {
  const [winReady, setWinReady] = useState(false);
  const [data, setData] = useState(initialData);
  useEffect(() => {
    setWinReady(true);
  }, []);
  return (
    //   Here! https://egghead.io/lessons/react-create-and-style-a-list-of-data-with-react
    <div className={styles.testingContext}>
      {winReady ? <h2>aloja</h2> : null}
    </div>
  );
};

export default TestingDnd;
