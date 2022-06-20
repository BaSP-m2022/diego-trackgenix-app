import React from 'react';
import styles from './index.module.css';
import Table from 'components/shared/table';
import Button from 'components/shared/buttons';
import { useState } from 'react';
import ModalDeleteEmp from 'components/employees/modal/modalDelete';

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
      delete: <Button icons={'delete'} callback={() => onDelete(employee)} />
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
        objProp={['firstName', 'lastName', 'email', 'edit', 'delete']}
        headers={['First Name', 'Last name', 'email', 'Edit', 'Delete']}
      />
    </div>
  );
};
export default ListEmployee;
