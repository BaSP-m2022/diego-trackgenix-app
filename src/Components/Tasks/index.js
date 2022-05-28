import { useEffect, useState } from 'react';
import TasksList from './TasksList';
import styles from './tasks.module.css';

const Tasks = () => {
  const [taskList, setTasksList] = useState([]);

  useEffect(() => {
    try {
      fetch(`http://localhost:4000/tasks`)
        .then((response) => response.json())
        .then((response) => {
          setTasksList(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <TasksList list={taskList}></TasksList>
    </div>
  );
};

export default Tasks;
