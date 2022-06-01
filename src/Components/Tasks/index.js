import styles from './tasks.module.css';
import EditTask from './EditTask';

function Tasks() {
  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      <EditTask />
    </section>
  );
}

export default Tasks;
