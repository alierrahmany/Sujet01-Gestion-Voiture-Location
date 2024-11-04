import React from 'react';

function Voiture({ id, Marque, TypeCarburant, PrixLocation, image, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{Marque}</td>
      <td>{TypeCarburant}</td>
      <td>{PrixLocation} MAD</td>
      <td>
        <img src={image} alt={Marque} className="img-fluid" style={{ maxWidth: '100px', height: 'auto' }} />
      </td>
      <td>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Supprimer
        </button>
      </td>
    </tr>
  );
}

export default Voiture;
