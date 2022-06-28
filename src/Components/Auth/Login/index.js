import InputControlled from '../../Shared/InputControlled';
import styles from './login.module.css';
import { login } from '../../../redux/auth/thunks';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import Modal from '../../Shared/Modal';
import { useState } from 'react';
import Button from '../../Shared/Buttons/buttons';

function Login() {
  const dispatch = useDispatch();
  const [modalNotification, setModalNotification] = useState(false, { title: '' });
  const onSubmit = (formValues) => {
    return dispatch(login(formValues, setModalNotification));
  };

  const schema = Joi.object({
    email: Joi.string()
      .required()
      .regex(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
      .messages({
        'string.pattern.base': 'There are invalid characters'
      }),
    password: Joi.string()
      .required()
      .min(8)
      .regex(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,25})$/)
      .messages({
        'string.pattern.base': 'The password must have letters and numbers'
      })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema)
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.tittle}>Welcome to Trackgenix!</h2>
      <form id="login" onSubmit={handleSubmit(onSubmit)}>
        <InputControlled
          label={'E-mail Adress'}
          type={'text'}
          name={'email'}
          placeholder="E-mail"
          register={register}
          required
          error={errors.email}
        />
        <InputControlled
          label={'Password'}
          type={'password'}
          name={'password'}
          placeholder="Password"
          register={register}
          required
          error={errors.password}
        />
        <input type="checkbox" name="forgot" id="forgot" />
        <label htmlFor="forgot">Remember me</label>
        <Modal
          isOpen={modalNotification}
          setIsOpen={setModalNotification}
          title={modalNotification.title}
        >
          <Button callback={() => setModalNotification(false)} text={'OK'} />
        </Modal>
      </form>
      <button form="login" type="submit" className={styles.loginButton}>
        Log In
      </button>
    </section>
  );
}

export default Login;
