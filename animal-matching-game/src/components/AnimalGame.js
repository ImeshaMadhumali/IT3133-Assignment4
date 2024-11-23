import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import { animals } from '../assets/data/AnimalDb';

function AnimalGame() {
  const [randomAnimal, setRandomAnimal] = useState({});
  const [result, setResult] = useState(null);

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[randomIndex]);
    setResult(null); // Reset result for the new round
  };

  const handleAnimalClick = (clickedName) => {
    if (clickedName === randomAnimal.name) {
      setResult('win');
    } else {
      setResult('lose');
    }
  };

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < animals.length; i += 4) {
      rows.push(
        <tr key={i}>
          {animals.slice(i, i + 4).map((animal) => (
            <AnimalCard
              key={animal.name}
              img={animal.img}
              name={animal.name}
              onClick={handleAnimalClick}
            />
          ))}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="animal-game">
      <h1>Animal Matching Game</h1>
      <div className="instructions">
        Match the animal: <strong>{randomAnimal.name}</strong>
      </div>
      <table className="animal-table">
        <tbody>{renderTableRows()}</tbody>
      </table>
      {result && (
        <div className={`result ${result}`}>
          You {result === 'win' ? 'Won!' : 'Lost!'}
        </div>
      )}
      <button onClick={getRandomAnimal}>Next Animal</button>
    </div>
  );
}

export default AnimalGame;
