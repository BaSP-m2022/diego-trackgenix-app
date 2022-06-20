import React from 'react';
import Modal from '../../shared/modal';
import Button from '../../shared/buttons';

const ModalDeleteEmp = ({ setIsModalDeleteOpen, isModalDeleteOpen, deleteItem, employeeItem }) => {
  return (
    <Modal isOpen={isModalDeleteOpen} setIsOpen={setIsModalDeleteOpen}>
      <div>want to delete this employee?</div>
      <Button
        text={'YES'}
        callback={() => {
          deleteItem(employeeItem._id);
          setIsModalDeleteOpen(false);
        }}
      />
      <Button
        text={'NO'}
        callback={() => {
          setIsModalDeleteOpen(false);
        }}
      />
    </Modal>
  );
};

export default ModalDeleteEmp;
