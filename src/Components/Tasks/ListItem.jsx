import React from 'react';

const ListItem = ({ list, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(list._id);
  };

  return (
    <tr>
      <td>{list._id}</td>
      <td>{list.description}</td>
      <td>{list.workedHours}</td>
      <td>{list.date}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(list._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ListItem;
