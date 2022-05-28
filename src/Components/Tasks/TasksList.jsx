import styles from './tasks.module.css';
import ListItem from './ListItem';

const TasksList = ({ list }) => {
  console.log('Estoy en TASKLIST', list);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Worked Hours</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return <ListItem key={item._id} list={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
