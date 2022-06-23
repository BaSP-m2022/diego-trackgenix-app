import React, { useState, useEffect } from 'react';
import styles from './super-admins.module.css';
import Button from '../Shared/Buttons/buttons';
import Table from '../Shared/Table/Table';
import Modal from '../Shared/Modal/index';
import Loader from '../Shared/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSuperAdmins,
  deleteSuperAdmin,
  addSuperAdmin,
  editSuperAdmin
} from '../../redux/superAdmins/thunks';
import InputControlled from '../Shared/InputControlled';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

function SuperAdmins() {
  const schema = Joi.object({
    firstName: Joi.string()
      .required()
      .min(3)
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.empty': 'First name is required',
        'string.min': 'First name should have at least 3 characters',
        'string.pattern.base': 'There are invalid characters'
      }),
    lastName: Joi.string()
      .required()
      .min(3)
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.empty': 'Last name is required',
        'string.min': 'Last name should have at least 3 characters',
        'string.pattern.base': 'There are invalid characters'
      }),
    password: Joi.string()
      .required()
      .min(8)
      .regex(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,25})$/)
      .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password should have at least 8 characters',
        'string.pattern.base': 'Should be alphanumeric'
      }),
    email: Joi.string().required().lowercase().messages({
      'string.empty': 'Email is required',
      'string.pattern.base': 'Email format it is not valid'
    })
  });
  const superAdmins = useSelector((state) => state.superAdmins.List);
  const [id, setId] = useState('');
  const [superAdmin, setSuperAdmin] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema)
  });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.superAdmins.isLoading);
  const error = useSelector((state) => state.superAdmins.error);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [modalNotification, setModalNotification] = useState(false, { message: '' });

  useEffect(() => {
    dispatch(getSuperAdmins());
  }, []);

  useEffect(() => {
    reset({
      firstName: superAdmin.firstName,
      lastName: superAdmin.lastName,
      email: superAdmin.email,
      password: superAdmin.password
    });
  }, [superAdmin]);

  useEffect(() => {
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }, [isOpenAdd === true]);

  const getData = () => {
    return superAdmins.map((superAdmin) => ({
      ...superAdmin,
      edit: (
        <Button
          icons="edit"
          callback={() => {
            setSuperAdmin(superAdmin);
            setIsOpenEdit(true);
          }}
        />
      ),
      delete: (
        <Button
          icons="delete"
          callback={() => {
            setIsOpen(true);
            setId(superAdmin._id);
          }}
        />
      )
    }));
  };

  // HANDLERS
  const handleDeleteSuperAdmin = (superAdmID) => {
    dispatch(deleteSuperAdmin(superAdmID, setIsOpen, setModalNotification));
  };

  const handleCreateSuperAdmin = ({ firstName, lastName, email, password }, e) => {
    e.preventDefault();
    const newSadmin = { firstName, lastName, email, password };
    dispatch(addSuperAdmin(newSadmin, setIsOpenAdd, setModalNotification));
    reset();
  };

  const handleEditSuperAdmin = ({ firstName, lastName, email, password }, e) => {
    e.preventDefault();
    const editSadmin = { firstName, lastName, email, password };
    dispatch(editSuperAdmin(editSadmin, superAdmin, setIsOpenEdit, setModalNotification, reset));
    reset();
  };

  const headers = ['Name', 'Last Name', 'Email', 'Password', 'Edit', 'Delete'];
  const objProp = ['firstName', 'lastName', 'email', 'password', 'edit', 'delete'];
  if (error) {
    return <Loader isLoading={isLoading} />;
  }
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  } else {
    return (
      <section className={styles.container}>
        <h2>SuperAdmins</h2>
        <Button
          icons={'add'}
          callback={() => {
            setIsOpenAdd(true);
          }}
        />
        {/* MODAL DELETE */}
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          message={'Are you sure you want to delete this Super Admin?'}
        >
          <Button callback={() => handleDeleteSuperAdmin(id)} text={'Delete'} />
        </Modal>
        {/* MODAL ADD */}
        <Modal isOpen={isOpenAdd} setIsOpen={setIsOpenAdd} reset={reset}>
          <h3>Add new super admin</h3>
          <form className={styles.containerForm} onSubmit={handleSubmit(handleCreateSuperAdmin)}>
            <InputControlled
              label={'First Name:'}
              name="firstName"
              register={register}
              required
              error={errors.firstName}
              placeholder={'First name'}
            />
            <InputControlled
              label={'Last Name:'}
              name="lastName"
              register={register}
              required
              error={errors.lastName}
              placeholder={'Last name'}
            />
            <InputControlled
              type={'email'}
              label={'Email:'}
              name="email"
              register={register}
              required
              error={errors.email}
              placeholder={'Email'}
            />
            <InputControlled
              type={'password'}
              label={'Password:'}
              name="password"
              register={register}
              required
              error={errors.password}
              placeholder={'Password'}
            />
            <Button icons={'submit'} />
          </form>
        </Modal>
        {/* MODAL EDIT */}
        <Modal isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} reset={reset}>
          <h3>Edit super admin</h3>
          <form className={styles.containerForm} onSubmit={handleSubmit(handleEditSuperAdmin)}>
            <InputControlled
              label={'First Name:'}
              name="firstName"
              register={register}
              required
              error={errors.firstName}
              placeholder={'First name'}
            />
            <InputControlled
              label={'Last Name:'}
              name="lastName"
              register={register}
              required
              error={errors.lastName}
              placeholder={'Last name'}
            />
            <InputControlled
              type={'email'}
              label={'Email:'}
              name="email"
              register={register}
              required
              error={errors.email}
              placeholder={'Email'}
            />
            <InputControlled
              type={'password'}
              label={'Password:'}
              name="password"
              register={register}
              required
              error={errors.password}
              placeholder={'Password'}
            />
            <Button icons={'submit'} />
          </form>
        </Modal>
        {/* MODAL NOTIFICATION */}
        <Modal
          isOpen={modalNotification}
          setIsOpen={setModalNotification}
          message={modalNotification.message}
        >
          <Button callback={() => setModalNotification(false)} text={'OK'} />
        </Modal>
        {/* TABLE */}
        <Table data={getData()} objProp={objProp} headers={headers} />
      </section>
    );
  }
}

export default SuperAdmins;
