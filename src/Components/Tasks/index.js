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

  const deleteItem = (id) => {
    if (window.confirm('Are you sure?')) {
      setTasksList([...taskList.filter((listItem) => listItem._id !== id)]);
    }
  };

  return (
    <div className={styles.container}>
      <TasksList list={taskList} deleteItem={deleteItem}></TasksList>
    </div>
  );
};

export default Tasks;
