import styles from './employees.module.css';
import List from './List/listEmployee';

function Employees() {
  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <List />
      </div>
    </section>
  );
}

export default Employees;
