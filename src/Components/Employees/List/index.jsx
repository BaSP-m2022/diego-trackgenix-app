import React from 'react';
import styles from './index.module.css';
import Table from '../../Shared/Table/Table';
import Button from '../../Shared/Buttons/buttons';
import { useState } from 'react';
import ModalDeleteEmp from '../Modal/modalDelete';
import { NavLink } from 'react-router-dom';

const ListEmployee = ({ Employees, deleteItem, setIsEditModalOpen, setEditItem }) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [employeeItem, setemployeeItem] = useState({});
  const getData = () => {
    return Employees.map((employee) => ({
      ...employee,
      edit: (
        <Button
          icons={'edit'}
          callback={() => {
            onEdit(employee);
          }}
        />
      ),
      delete: <Button icons={'delete'} callback={() => onDelete(employee)} />,
      detail: (
        <NavLink className={styles.link} to={'/employees/' + employee._id}>
          Detail
        </NavLink>
      )
    }));
  };
  const handleEdit = (employee) => {
    setEditItem(employee);
    console.log(employee);
    // alert(`Employee ${employee.firstName} ready for edit`);
  };

  const onDelete = (employee) => {
    setIsModalDeleteOpen(true);
    setemployeeItem(employee);
  };
  const onEdit = (employee) => {
    setIsEditModalOpen(true);
    handleEdit(employee);
  };
  return (
    <div className={styles.container}>
      <ModalDeleteEmp
        setIsModalDeleteOpen={setIsModalDeleteOpen}
        isModalDeleteOpen={isModalDeleteOpen}
        employeeItem={employeeItem}
        deleteItem={deleteItem}
      />
      <Table
        data={getData()}
        objProp={['firstName', 'lastName', 'email', 'edit', 'delete', 'detail']}
        headers={['First Name', 'Last name', 'email', 'Edit', 'Delete', 'Detail']}
      />
    </div>
  );
};
export default ListEmployee;
