import React from 'react';
import Modal from 'components/shared/modal';
import styles from './time-sheets.module.css';
// import Button from 'components/shared/buttons';
import { ButtonOption } from 'components/shared/buttonsOption';
const ModalDeleteConfirmation = ({
  deleteTimeSheet,
  timeSheet,
  dispatch,
  setIsModalDelete,
  isModalDelete
}) => {
  return (
    <Modal isOpen={isModalDelete} setIsOpen={setIsModalDelete} title={'Delete Timesheet'}>
      {/* <div className={styles.modalHeader}>
        <h5 className={styles.heading}>Confirmation</h5>
      </div> */}
      <h3>Are you sure?</h3>

      {/* <div className={styles.modalActions}> */}
      {/* <div className={styles.actionsContainer}> */}
      {/* <Button
            callback={() => {
              deleteTimeSheet(timeSheet)(dispatch).then(() => setIsModalDelete(false));
            }}
            text={'Delete'}
          />
          <Button
            callback={() => {
              setIsModalDelete(false);
            }}
            text={'Cancel'}
          /> */}
      <div className={styles.modalbuttons}>
        <ButtonOption
          option={'yes'}
          text={'Confirm'}
          callback={() => {
            deleteTimeSheet(timeSheet)(dispatch).then(() => setIsModalDelete(false));
          }}
        ></ButtonOption>
        <ButtonOption
          option={'no'}
          callback={() => {
            setIsModalDelete(false);
          }}
          text={'Cancel'}
        ></ButtonOption>
        {/* </div> */}
        {/* </div> */}
      </div>
    </Modal>
  );
};

export default ModalDeleteConfirmation;
