import { GET_EMPLOYEES_SUCCESS } from './constants';

const initialState = {
  employeesList: [],
  error: ''
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeesList: action.payload
      };
    default:
      return state;
  }
};
