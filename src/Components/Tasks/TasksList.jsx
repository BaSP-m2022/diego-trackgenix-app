import styles from './tasks.module.css';
import ListItem from './ListItem';

const TasksList = ({ list, deleteItem }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Worked Hours</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return <ListItem key={item._id} list={item} deleteItem={deleteItem} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
