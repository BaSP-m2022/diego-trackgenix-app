import {
  GET_SUPERADMINS_SUCCESS,
  ADD_SUPERADMINS_SUCCESS,
  DELETE_SUPERADMINS_SUCCESS,
  EDIT_SUPERADMINS_SUCCESS
} from './constants';

const initialState = {
  superAdminsList: []
};
// let updatedSA = [];
export const superAdminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUPERADMINS_SUCCESS:
      return {
        ...state,
        superAdminsList: action.payload
      };
    case ADD_SUPERADMINS_SUCCESS:
      return {
        ...state,
        superAdminsList: [...state.superAdminsList, action.payload]
      };
    case DELETE_SUPERADMINS_SUCCESS:
      return {
        ...state,
        superAdminsList: state.superAdminsList.filter((e) => e._id !== action.payload)
      };
    case EDIT_SUPERADMINS_SUCCESS:
      return {
        ...state,
        superAdminsList: state.superAdminsList.map((element) =>
          element.email === action.payload.email ? action.payload : element
        )
      };
    default:
      return state;
  }
};
