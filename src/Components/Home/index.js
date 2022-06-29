import styles from './home.module.css';
import SignUp from './SignUp';

function Home() {
  return (
    <section className={styles.container}>
      <h2>Home</h2>
      <SignUp />
    </section>
  );
}

export default Home;
