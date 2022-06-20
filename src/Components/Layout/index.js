import Footer from 'components/footer';
import styles from './layout.module.css';
import Header from 'components/header';
// import SideBar from '../Shared/SideBar/SideBar';
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
