import React, { useState } from 'react';
import styles from './form.module.css';

const AddTask = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState({
    description: '',
    workedHours: '',
    date: ''
  });

  const onChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput({
      description: '',
      workedHours: '',
      date: ''
    });
  };

  return (
    <div className={styles.container}>
      <h2>Add new Task</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.data}>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={taskInput.description} onChange={onChange} />
        </div>
        <div className={styles.data}>
          <label htmlFor="workedHours">Worked Hours</label>
          <input type="text" name="workedHours" value={taskInput.workedHours} onChange={onChange} />
        </div>
        <div className={styles.data}>
          <label htmlFor="date">Date</label>
          <input type="text" name="date" value={taskInput.date} onChange={onChange} />
        </div>
        <div>
          <input type="submit" value="submit" className={styles.submit} />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
