import { getEmployeesSuccess } from './actions';

export const getEmployees = () => {
  return (dispatch) => {
    //   dispatch(timeSheetsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/timesheets`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getEmployeesSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        // dispatch(timeSheetsError(error.toString()));
      });
  };
};
