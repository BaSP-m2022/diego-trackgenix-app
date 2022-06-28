import { loginPending, loginSuccess, loginError } from './actions';
import firebase from '../../helpers/firebase';

export const login = (credentials, setModalNotification) => {
  return (dispatch) => {
    dispatch(loginPending());
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        const token = await response.user.getIdToken();
        const {
          claims: { role }
        } = await response.user.getIdTokenResult();
        dispatch(loginSuccess({ role, token }));
        setModalNotification({
          modalNotification: true,
          title: 'LogIn Successfully'
        });
      })
      .catch((error) => {
        dispatch(loginError(error.toString()));
        setModalNotification({
          modalNotification: true,
          title: 'Error in LogIn:' + error.toString()
        });
      });
  };
};
