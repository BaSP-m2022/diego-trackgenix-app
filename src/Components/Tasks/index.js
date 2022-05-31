require('dotenv').config();
import { useEffect, useState } from 'react';
import TasksList from './TasksList';
import styles from './tasks.module.css';
import Modal from './TasksModal';
import AddTask from './AddTask';
import EditTask from './EditTask';

const Tasks = () => {
  const [taskList, setTasksList] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/tasks`)
        .then((response) => response.json())
        .then((response) => {
          setTasksList(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [modalState, setModalState] = useState(false, { id: null });

  const openModal = (id) => {
    setModalState({
      setModalState: true,
      id
    });
  };

  const deleteItem = () => {
    if (modalState.id) {
      fetch(`${process.env.REACT_APP_API_URL}/tasks`, { method: 'DELETE' }).then(() =>
        setTasksList([...taskList.filter((listItem) => listItem._id !== modalState.id)])
      );
      setModalState(!modalState);
    }
  };

  const addTask = ({ description, workedHours, date }) => {
    const newTask = {
      _id: Math.floor(Math.random() * 10000),
      description,
      workedHours,
      date
    };
    setTasksList([...taskList, newTask]);
  };

  /* const [taskToEdit, setTaskToEdit] = useState(null); */

  return (
    <div className={styles.container}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <h2>Are you sure?</h2>
        <button onClick={deleteItem}>Yes</button>
      </Modal>
      <AddTask addTask={addTask}></AddTask>
      <EditTask />
      <TasksList tasklist={taskList} deleteItem={openModal}></TasksList>
      {/* <button onClick={handleClickCreat} className={styles.createTask}>
        + Create Task +
      </button> */}
    </div>
  );
};

export default Tasks;
