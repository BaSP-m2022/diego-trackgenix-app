import React from 'react';

const ListItem = ({ list }) => {
  return (
    <tr>
      <td>{list._id}</td>
      <td>{list.description}</td>
      <td>{list.workedHours}</td>
    </tr>
  );
};

export default ListItem;
