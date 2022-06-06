import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { IoMdSend, IoIosAddCircleOutline } from 'react-icons/io';
import styles from './buttons.module.css';

const Button = function ({ text, callback, icons }) {
  if (icons === 'add') {
    return (
      <button style={styles} onClick={callback}>
        {text}
        <IoIosAddCircleOutline />
      </button>
    );
  } else if (icons === 'edit') {
    return (
      <button onClick={callback}>
        {text}
        <FiEdit />
      </button>
    );
  } else if (icons === 'delete') {
    return (
      <button onClick={callback}>
        {text}
        <MdDeleteForever />
      </button>
    );
  } else if (icons === 'submit') {
    return (
      <button onClick={callback}>
        {text}
        <IoMdSend />
      </button>
    );
  } else {
    return (
      <button className={styles.generic} onClick={callback}>
        {text}
      </button>
    );
  }
};

export default Button;