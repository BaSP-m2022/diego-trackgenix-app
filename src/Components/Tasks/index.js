import { useEffect, useState } from 'react';
import TasksList from './TasksList';
import styles from './tasks.module.css';

const Tasks = () => {
  const [taskList, setTasksList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/tasks`)
      .then((response) => response.json())
      .then((response) => {
        setTasksList(response.data);
        // console.log('Task', response);
        // console.log('Task', taskList);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TasksList list={taskList}></TasksList>
    </div>
  );
};

export default Tasks;
