import { useEffect, useState } from 'react';
import style from '../List/list.module.css';

function List() {
  const [Employees, saveEmployees] = useState([]);
  console.log('Employees: ', Employees);
  useEffect(() => {
    fetch('http://localhost:4000/employees')
      .then((response) => response.json())
      .then((response) => {
        saveEmployees(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={style.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            {/* <th>Active</th> */}
          </tr>
        </thead>
        <tbody>
          {Employees.map((employees) => {
            return (
              <tr key={employees._id}>
                <th>{employees.first_Name}</th>
                <th>{employees.last_Name}</th>
                <th>{employees.phone}</th>
                <th>{employees.email}</th>
                <th>{employees.active}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
