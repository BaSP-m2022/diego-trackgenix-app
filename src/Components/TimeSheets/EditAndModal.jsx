import React from 'react';
import { useEffect } from 'react';
import styles from './time-sheets.module.css';
import Button from '../Shared/Buttons/buttons';
import Modal from '../Shared/Modal/index';
import DropdownForm from '../Shared/dropdownForm.jsx/dropdownForm';
import InputControlled from '../Shared/inputControlled/inputControlled';
import { editTimeSheet } from '../../redux/timesheets/thunks';
import { useDispatch } from 'react-redux/es/exports';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

const ModalTimeSheetEdit = ({
  isModalEdit,
  timeSheet,
  setIsModalEdit,
  employees,
  tasks,
  projects
}) => {
  const dispatch = useDispatch();
  const schema = Joi.object({
    description: Joi.string()
      .min(5)
      .max(30)
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.min': 'Description must contain 5 or more characters',
        'string.max': 'Description must contain 30 or less characters',
        'string.pattern.base': 'Description is not valid',
        'string.empty': 'This field is required'
      })
      .required(),
    startDate: Joi.date().default(() => {
      return new Date();
    }),
    endDate: Joi.date().default(() => {
      return new Date();
    }),
    hours: Joi.number().required().positive(),
    projects: Joi.string().required(),
    tasks: Joi.string().required(),
    employees: Joi.string().required(),
    validated: Joi.string().valid('true', 'false')
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema)
  });
  useEffect(() => {
    reset({
      description: timeSheet.description,
      startDate: new Date(timeSheet.startDate).toISOString().substr(0, 10),
      endDate: new Date(timeSheet.endDate).toISOString().substr(0, 10),
      hours: timeSheet.hours,
      projects: timeSheet.projectId,
      tasks: timeSheet.taskId,
      employees: timeSheet.employeeId,
      validated: timeSheet.validated
    });
    console.log('timeSheet.projectId', timeSheet.projectId, 'projects', projects);
  }, [timeSheet]);
  const editTimeSheetHandler = (
    { description, hours, startDate, endDate, tasks, validated, employees, projects },
    e
  ) => {
    e.preventDefault();
    dispatch(
      editTimeSheet(
        timeSheet,
        description,
        startDate,
        endDate,
        hours,
        tasks,
        validated,
        employees,
        projects
      )
    );
    setIsModalEdit(false);
    reset();
  };

  return (
    <section>
      <Modal isOpen={isModalEdit} setIsOpen={setIsModalEdit}>
        <form onSubmit={handleSubmit(editTimeSheetHandler)} className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputColumnOne}>
              <InputControlled
                type={'text'}
                label={'Description'}
                name="description"
                register={register}
                required
                error={errors.description}
              />
              <InputControlled
                type={'text'}
                label={'Hours'}
                name="hours"
                register={register}
                required
                error={errors.hours}
              />
              <InputControlled
                type={'date'}
                label={'Start Date'}
                name="startDate"
                register={register}
                required
                error={errors.startDate}
              />
              <InputControlled
                type={'date'}
                label={'End Date'}
                name="endDate"
                register={register}
                required
                error={errors.endDate}
              />
            </div>
            <div className={styles.inputColumnTwo}>
              <DropdownForm
                initialOption="Select a project"
                label="Projects"
                options={projects}
                name="projects"
                register={register}
                required
                error={errors.projects}
              />
              <DropdownForm
                initialOption="Select a employee"
                label="Employees"
                options={employees}
                name="employees"
                register={register}
                required
                error={errors.employees}
              />
              <DropdownForm
                initialOption="Select a task"
                label="Tasks"
                options={tasks}
                name="tasks"
                register={register}
                required
                error={errors.tasks}
              />
              <DropdownForm
                initialOption="Is Validated?"
                label="Validated"
                options={['true', 'false']}
                name="validated"
                register={register}
                required
                error={errors.validated}
              />
            </div>
          </div>
          <div className={styles.btnModalContainer}>
            <Button
              callback={() => {
                setIsModalEdit(false);
              }}
              text={'Cancel'}
            ></Button>
            <Button text={'Edit'}></Button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default ModalTimeSheetEdit;
