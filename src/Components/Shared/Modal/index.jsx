import React from 'react';
import styles from './modal.module.css';
import Button from '../Buttons/buttons';

const Modal = ({ children, isOpen, setIsOpen, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.contenedorModal}>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.buttonCloseModal}
            callback={() => setIsOpen(false)}
            icons={'close'}
          ></Button>
        </div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;
