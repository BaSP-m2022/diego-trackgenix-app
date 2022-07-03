import React from 'react';
import Modal from 'components/shared/modal';
// import Button from 'components/shared/buttons';
import { ButtonOption } from 'components/shared/buttonsOption';
import styles from 'components/employees/employeeForm/index.module.css';
const ModalDeleteEmp = ({
  setIsModalDeleteOpen,
  isModalDeleteOpen,
  deleteItem,
  employeeItem,
  dispatch
}) => {
  return (
    <Modal isOpen={isModalDeleteOpen} setIsOpen={setIsModalDeleteOpen} title={'Delete Employee'}>
      <h3>Are you sure?</h3>
      {/* <Button
        text={'YES'}
        callback={() => {
          deleteItem(employeeItem)(dispatch);
          setIsModalDeleteOpen(false);
        }}
      />
      <Button
        text={'NO'}
        callback={() => {
          setIsModalDeleteOpen(false);
        }}
      /> */}
      <div className={styles.modalbuttons}>
        <ButtonOption
          option={'yes'}
          text={'Confirm'}
          callback={() => {
            deleteItem(employeeItem)(dispatch);
            setIsModalDeleteOpen(false);
          }}
        ></ButtonOption>
        <ButtonOption
          option={'no'}
          callback={() => setIsModalDeleteOpen(false)}
          text={'Cancel'}
        ></ButtonOption>
      </div>
    </Modal>
  );
};

export default ModalDeleteEmp;
