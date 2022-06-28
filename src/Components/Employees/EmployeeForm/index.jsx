import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Button from '../../Shared/Buttons/buttons';
import Modal from '../../Shared/Modal';

import { useForm } from 'react-hook-form';


const EmployeeForm = ({
  editEmployee,
  // isAddModalOpen,
  initialValue,
  isEditModalOpen,
  setIsEditModalOpen,
  // setIsAdding,
  setEditItem,
  dispatch
}) => {

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' });


  useEffect(() => {
    if (initialValue) {
      reset({
        firstName: initialValue.firstName,
        lastName: initialValue.lastName,
        email: initialValue.email,
        password: initialValue.password
      });
    }
  }, [initialValue]);

  const onSubmit = (data) => {
    if (initialValue) {
      editEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      });
    } else {

      addEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password

      });
    }
  };
  console.log(`${isAddModalOpen}`);
  return (
    <section>
      <Modal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Add new Employee</h2>
          </div>
          <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formItem}>
              <label>First Name</label>
              <input type="text" {...register('firstName', { required: true })} />
            </div>
            <div className={styles.formItem}>
              <label>Last Name</label>
              <input type="text" {...register('lastName')} />
            </div>
            <div className={styles.formItem}>
              <label>Email</label>
              <input type="email" {...register('email')} />
            </div>
            <div className={styles.formItem}>
              <label>password</label>
              <input type="password" {...register('password')} />
            </div>
            <div className={styles.formItemSend}>
              <Button
                type="submit"
                value="Submit"
                icons={'submit'}
                callback={() => {
                  setIsAdding(false);
                }}
              />
            </div>
            <div className={styles.formItemSend}>
              <Button
                text="Cancel"
                callback={() => {
                  setIsEditModalOpen(false) || setIsAddModalOpen(false);
                  setIsAdding(false);
                }}
              />
            </div>
          </form>
        </div>
      </Modal>
      <Modal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Edit employee</h2>
          </div>
          <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formItem}>
              <label>First Name</label>
              <input type="text" {...register('firstName', { required: true })} />
            </div>
            <div className={styles.formItem}>
              <label>Last Name</label>
              <input type="text" {...register('lastName')} />
            </div>
            <div className={styles.formItem}>
              <label>Email</label>
              <input type="email" {...register('email')} />
            </div>
            <div className={styles.formItem}>
              <label>password</label>
              <input type="password" {...register('password')} />
            </div>
            <div className={styles.formItemSend}>
              <Button
                type="submit"
                value="Submit"
                icons={'submit'}
                callback={() => {
                  setIsAdding(false);
                }}
              />
            </div>
            <div className={styles.formItemSend}>
              <Button
                text="Cancel"
                callback={() => {
                  setIsEditModalOpen(false) || setIsAddModalOpen(false);
                  setIsAdding(false);
                }}
              />
            </div>
            <form className={styles.containerForm} onSubmit={onSubmit}>
              <div className={styles.formItem}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formItem}>
                <label>password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.formItemSend}>
                <Button
                  type="submit"
                  value="Submit"
                  icons={'submit'}
                  callback={() => {
                    editEmployee(
                      initialValue,
                      firstName,
                      lastName,
                      email,
                      password,
                      setEditItem,
                      setIsEditModalOpen
                    )(dispatch);
                  }}
                />
              </div>
              <div className={styles.formItemSend}>
                <Button
                  text="Cancel"
                  callback={() => {
                    setIsEditModalOpen(false);
                  }}
                />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </section>
  );
};
export default EmployeeForm;
