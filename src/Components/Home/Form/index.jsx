import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Button from '../../Shared/Buttons/buttons';
import { useForm } from 'react-hook-form';

const SignUpForm = ({ addEmployee }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    addEmployee({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    });
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Sign Up</h2>
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
            <Button type="submit" value="Submit" icons={'submit'} callback={() => {}} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default SignUpForm;
