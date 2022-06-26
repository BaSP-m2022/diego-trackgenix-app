import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.css';

const Employee = () => {
  const params = useParams();
  const id = params.id;
  const url = `${process.env.REACT_APP_API_URL}/employees/${id}`;
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setEmployee(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>Employee: {employee.firstName + ' ' + employee.lastName}</h2>
      <h4>Email: {employee.email}</h4>
    </div>
  );
};

export default Employee;
