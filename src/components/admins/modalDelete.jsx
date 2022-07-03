import Modal from 'components/shared/modal';
// import Button from 'components/shared/buttons';
import { ButtonOption } from 'components/shared/buttonsOption';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdmin } from 'redux/admins/thunks';
import styles from './admins.module.css';

const ModalDelete = ({ setShowDeleteModal, showDeleteModal, admin }) => {
  const dispatch = useDispatch();
  return (
    <Modal isOpen={showDeleteModal} setIsOpen={setShowDeleteModal} title={'Delete Admin'}>
      <div>
        <h3>Are you sure?</h3>
      </div>
      <div className={styles.modalbuttons}>
        {/* <Button
          text={'Delete'}
          callback={() => {
            deleteAdmin(admin)(dispatch).then(() => {
              setShowDeleteModal(false);
            });
          }}
        >
          Delete
        </Button> */}
        <ButtonOption
          option={'yes'}
          text={'Confirm'}
          callback={() => {
            deleteAdmin(admin)(dispatch).then(() => {
              setShowDeleteModal(false);
            });
          }}
        ></ButtonOption>
        <ButtonOption
          option={'no'}
          callback={() => setShowDeleteModal(false)}
          text={'Cancel'}
        ></ButtonOption>
      </div>
    </Modal>
  );
};

export default ModalDelete;
