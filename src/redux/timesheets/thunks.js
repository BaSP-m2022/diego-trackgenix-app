import {
  getTimeSheetsSuccess,
  editTimeSheetsSuccess,
  deleteTimeSheetsSuccess,
  timeSheetsPending,
  timeSheetsError,
  addTimeSheetsSuccess
} from './actions';

export const getTimeSheets = () => {
  return (dispatch) => {
    dispatch(timeSheetsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/timesheets`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getTimeSheetsSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        dispatch(timeSheetsError(error.toString()));
      });
  };
};
export const deleteTimeSheet = (timeSheet) => {
  return (dispatch) => {
    dispatch(timeSheetsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/timesheets/${timeSheet._id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(deleteTimeSheetsSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(timeSheetsError(error.toString()));
      });
  };
};

export const editTimeSheet = (
  timeSheet,
  description,
  startDate,
  endDate,
  hours,
  setModalErrorEdit
) => {
  return (dispatch) => {
    dispatch(timeSheetsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/timesheets/${timeSheet._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        taskId: timeSheet.taskId,
        validated: timeSheet.validated,
        employeeId: timeSheet.employeeId,
        projectId: timeSheet.projectId,
        startDate: startDate,
        endDate: endDate,
        hours: hours
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(editTimeSheetsSuccess(response.data));
          alert('Edited successfully');
        } else {
          dispatch(timeSheetsError(response.message));
          setModalErrorEdit(true);
        }
      })
      .then(() => getTimeSheets()(dispatch));
  };
};

export const addTimesheet = (
  description,
  taskId,
  validated,
  employeeId,
  projectId,
  startDate,
  endDate,
  hours,
  reset,
  setModalErrorAdd
) => {
  return (dispatch) => {
    dispatch(timeSheetsPending());
    fetch(`${process.env.REACT_APP_API_URL}/timesheets/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        taskId: taskId,
        validated: validated,
        employeeId: employeeId,
        projectId: projectId,
        startDate: startDate,
        endDate: endDate,
        hours: hours
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(addTimeSheetsSuccess(response.data));
          alert('Edited successfully');
        } else {
          dispatch(timeSheetsError(response.error));
          setModalErrorAdd(true);
        }
      })
      .then(() => getTimeSheets()(dispatch))
      .then(() => reset());
  };
};
