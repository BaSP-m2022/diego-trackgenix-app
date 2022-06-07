import { useEffect, useState } from 'react';
import styles from './index.module.css';
import ListEmployee from './List';
import EmployeeForm from './EmployeeForm';

const Employees = () => {
  const [employees, saveEmployees] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const url = `${process.env.REACT_APP_API_URL}/employees`;
  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          saveEmployees(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  //DELETE ITEM
  const deleteItem = async (id, firstName) => {
    await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    saveEmployees([...employees.filter((listItem) => listItem._id != id)]);
    alert(`The employee ${firstName} was deleted`);
  };

  //ADD NEW ITEM
  const addEmployee = async ({ firstName, lastName, email, password }) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          saveEmployees([...employees, data.data]);
        });
    } catch (error) {
      alert(`There was an error`);
    }
  };

  //EDIT
  const editEmployee = async ({ firstName, lastName, email, password }) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/employees/${editItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      })
        .then((response) => response.json())
        .then((data) => {
          if (!firstName || !lastName || !email || !password) {
            alert('Incomplete data');
            setEditItem(null);
          } else {
            const employeesUpdated = employees.map((emp) => {
              if (emp._id === data.data._id) {
                return data.data;
              } else return emp;
            });
            saveEmployees(employeesUpdated);
            setEditItem(null);
            alert(`The employee ${firstName} was edited`);
          }
        });
    } catch (error) {
      alert('There was an error with an input');
      setEditItem(null);
      console.error(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>Employees</h2>
      <div>
        <EmployeeForm
          addEmployee={addEmployee}
          editEmployee={editEmployee}
          initialValue={editItem}
        />
        <ListEmployee
          Employees={employees}
          saveEmployees={saveEmployees}
          setEditItem={setEditItem}
          deleteItem={deleteItem}
        />
      </div>
    </section>
  );
};
export default Employees;
