import React from 'react';

const ListItem = ({ list }) => {
  console.log(list._id);
  return (
    <tr>
      <td>{list._id}</td>
      <td>{list.description}</td>
      <td>{list.workedHours}</td>
    </tr>
  );
};

export default ListItem;
