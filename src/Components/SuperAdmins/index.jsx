import React from 'react';
import List from './List';
import styles from './super-admins.module.css';
import Button from '../Shared/Buttons/buttons';

function SuperAdmins() {
  return (
    <section className={styles.container}>
      <div>
        <h2>SuperAdmins</h2>
        <a href="/super-admins/form">
          {/* <button className={styles.createButton}>New user</button> */}
          <Button icons={'add'} />
        </a>
        <List />
      </div>
    </section>
  );
}

export default SuperAdmins;
