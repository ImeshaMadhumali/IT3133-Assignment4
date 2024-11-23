import React from 'react';

function AnimalCard({ img, name, onClick }) {
  return (
    <td className="animal-card" onClick={() => onClick(name)}>
      <img src={require(`../assets/images/${img}`)} alt={name} />
    </td>
  );
}

export default AnimalCard;
