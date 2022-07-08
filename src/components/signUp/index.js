import styles from './signup.module.css';
import { ButtonOption } from 'components/shared/buttonsOption';
import InputControlled from 'components/shared/inputControlled';
import { registerUser } from 'redux/auth/thunks';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Modal from 'components/shared/modal';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, setCustomUserClaims } from 'firebase/auth';
import { app } from 'helper/firebase';

function Signup() {
  const [showModalMessage, setShowModalMessage] = useState(false, { message: '' });
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref('password'))
      .label('Passwords do not match')
  });

  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema)
  });

  const signupUser = ({ email, password }, e) => {
    e.preventDefault();
    // logueo con firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let firebaseUid = userCredential.uid;
        app.default
          .auth()
          .setCustomUserClaims(firebaseUid, { role: 'EMPLOYEE' })
          .then(() => {
            console.log('User role set', firebaseUid);
          });
        if (user) {
          // dispatch a la fetch
          dispatch(registerUser(email, password)).then((response) => {
            if (response.type === 'REGISTER_ERROR') {
              setShowModalMessage({
                showModalMessage: true,
                title: 'Message',
                message: response.data
              });
            } else {
              setShowModalMessage({
                showModalMessage: true,
                title: 'Message',
                message: 'User created successfully'
              });
            }
          });
        }
      })
      .catch((error) => {
        setShowModalMessage({
          showModalMessage: true,
          title: error.code,
          message: error.messag
        });
      });
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.tittle}>Welcome to Trackgenix!</h2>
      <form onSubmit={handleSubmit(signupUser)}>
        <div>
          <InputControlled
            type={'text'}
            label={'Email'}
            name="email"
            register={register}
            required
            error={errors.email}
          />
        </div>
        <div>
          <InputControlled
            type={'password'}
            label={'Password'}
            name="password"
            register={register}
            required
            error={errors.password}
          />
        </div>
        <div>
          <InputControlled
            type={'password'}
            label={'Confirm Password'}
            name="confirmPassword"
            register={register}
            required
            error={errors.confirmPassword}
          />
        </div>
        <div className={styles.modalbuttons}>
          <ButtonOption option={'yes'} text={'Confirm'}></ButtonOption>
          <ButtonOption option={'no'} text={'Cancel'}></ButtonOption>
        </div>
      </form>
      <Modal
        isOpen={showModalMessage}
        setIsOpen={setShowModalMessage}
        title={showModalMessage.title}
        reset={reset}
      >
        <div className={styles.modalMessage}>{showModalMessage.message}</div>
      </Modal>
    </section>
  );
}

export default Signup;
