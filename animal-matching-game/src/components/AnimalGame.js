import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import { animals } from '../assets/data/AnimalDb';

function AnimalGame() {
  const randomIndex = Math.floor(Math.random() * animals.length);
  const [randomAnimal] = useState(animals[randomIndex]); // Static random animal
  const [result, setResult] = useState(" "); // Default result text

  const handleAnimalClick = (clickedName) => {
    if (clickedName === randomAnimal.name) {
      setResult('Win');
    } else {
      setResult('Lose');
    }
  };

  const renderAnimalGrid = () => {
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
              //borderColor={randomAnimal.name === animal.name ? "#4682b4" : "transparent"}
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
      <table className="animal-table">
        <thead>
          <tr>
            <th className="result-header">Result</th>
            <th className="animal-name-header">Animal Name</th>
            <th colSpan="4" className="grid-header">Select the Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="result-panel">
              <div className={`result ${result.toLowerCase()}`}>{result}</div>
            </td>
            <td className="animal-name-panel">
              <div className="animal-name">{randomAnimal.name}</div>
            </td>
            <td colSpan="4" className="grid-panel">
              <table className="grid-table">
                <tbody>{renderAnimalGrid()}</tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AnimalGame;
