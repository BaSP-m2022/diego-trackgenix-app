import InputControlled from '../Shared/InputControlled';
import Input from '../Shared/Input';
import styles from './login.module.css';

function Login() {
  return (
    <section className={styles.container}>
      <h2 className={styles.tittle}>Welcome to Trackgenix!</h2>
      <form action="">
        <Input labelText={'E-mail Adress'} type="text" placeholder="E-mail" />
        <Input labelText={'Password'} type="password" placeholder="Password" />
        <input type="checkbox" name="forgot" id="forgot" />
        <label htmlFor="forgot">Remember me</label>
      </form>
      <input type="button" value="Log in" className={styles.loginButton} />
    </section>
  );
}

export default Login;
