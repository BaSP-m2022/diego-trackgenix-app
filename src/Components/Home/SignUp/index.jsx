import { useState } from 'react';
import SignUpForm from '../Form';

const SignUp = () => {
  const [isAuth, setIsAuth] = useState(false);
  const signUpHandler = (data) => {
    setIsAuth(true);
    console.log(data);
  };

  return <div>{!isAuth && <SignUpForm addEmployee={signUpHandler} />}</div>;
};

export default SignUp;
