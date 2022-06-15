import { GET_EMPLOYEES_SUCCESS } from './constants';

export const getEmployeesSuccess = (employees) => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: employees
});
