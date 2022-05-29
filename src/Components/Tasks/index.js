import { useEffect, useState } from 'react';
import TasksList from './TasksList';
import styles from './tasks.module.css';
import Modal from './TasksModal';

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
  const [modalState, setModalState] = useState(false, { id: null });

  const openModal = (id) => {
    setModalState({
      setModalState: true,
      id
    });
  };

  const deleteItem = (id) => {
    if (modalState.id) {
      setTasksList([...taskList.filter((listItem) => listItem._id !== modalState.id)]);
      setModalState(!modalState);
    }
  };
  return (
    <div className={styles.container}>
      <Modal modalState={modalState} setModalState={setModalState}>
        <h2>Are you sure?</h2>
        <button onClick={deleteItem}>Yes</button>
      </Modal>
      <TasksList list={taskList} deleteItem={openModal}></TasksList>
    </div>
  );
};

export default Tasks;
