import { useEffect, useState } from 'react';
import styles from './employees.module.css';

function Employees() {
  const [employees, saveEmployees] = useState([]);

  useEffect(() => {
    fetch('https://diego-trackgenix-app.vercel.app/employees')
      .then((response) => response.json())
      .then((response) => {
        saveEmployees(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        {employees.map((employee) => {
          return <div key={employee.id}>{employee.name}</div>;
        })}
      </div>
    </section>
  );
}

export default Employees;
