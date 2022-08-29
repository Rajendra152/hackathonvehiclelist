import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const DeleteData = ({ vehicleList, handleDeleteClick }) => {
  return (
    <tr>
      <td>{vehicleList.name}</td>
      <td>{vehicleList.manufacturer}</td>
      <td>{vehicleList.model}</td>
      <td>{vehicleList.fuel}</td>
      <td>{vehicleList.color}</td>
      <td>{vehicleList.price}</td>
      <td>{vehicleList.currency}</td>
      <td>{vehicleList.city}</td>
      <td>{vehicleList.country}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(vehicleList.id)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default DeleteData;
