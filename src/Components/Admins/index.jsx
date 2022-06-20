import Table from 'components/shared/table';
import styles from './admins.module.css';
import ModalAdmin from 'components/admins/modalAdmin';
import { useState, useEffect } from 'react';
import ModalSuc from 'components/admins/modalSuccess';
import ModalError from 'components/admins/modalError';

function Admins() {
  const [SucModalIsOpen, setSucModalIsOpen] = useState(false);
  const [ErrModalIsOpen, setErrModalIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [admins, setAdmins] = useState([]);
  const fetchAdmins = () => {
    fetch(`${process.env.REACT_APP_API_URL}/admins/`)
      .then((response) => response.json())
      .then((response) => setAdmins(response.data));
  };
  useEffect(async () => {
    try {
      await fetchAdmins();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Admins</h2>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className={styles.addButton}
        >
          Add
        </button>
      </div>
      <div>
        <ModalSuc setSucModalIsOpen={setSucModalIsOpen} SucModalIsOpen={SucModalIsOpen}></ModalSuc>
        <ModalError
          setErrModalIsOpen={setErrModalIsOpen}
          ErrModalIsOpen={ErrModalIsOpen}
        ></ModalError>
        <ModalAdmin
          showModal={showModal}
          setShowModal={setShowModal}
          setAdmins={setAdmins}
          fetchAdmins={fetchAdmins}
        />
        {/* <List admins={admins} fetchAdmins={fetchAdmins} setAdmins={setAdmins} /> */}
        <Table data={admins} headers={['firstName', 'lastName', 'email']}></Table>
      </div>
      <div></div>
    </section>
  );
}

export default Admins;
