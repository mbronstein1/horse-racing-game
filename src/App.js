import React, { useState } from 'react';
import './app.css'
import PlayerButton from './components/PlayerButton';
let nextPosition = 0;

function App() {
  const [playerData, setPlayerData] = useState([
    {
      name: "Player 1",
      boardPosition: 0
    },
    {
      name: "Player 2",
      boardPosition: 0
    },
    {
      name: "Player 3",
      boardPosition: 0
    }
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(playerData[nextPosition].name);


  const setNewCurrentPlayer = () => {
    if (nextPosition < playerData.length - 1) {
      nextPosition++
    }
    else {
      nextPosition = 0;
    }
    console.log(`It is now Player ${nextPosition + 1}'s turn`)
    setCurrentPlayer(playerData[nextPosition].name)
  }

  let diceOne;
  let diceTwo;
  let diceThree;

  const moveCurrentPlayer = () => {
    diceOne = Math.ceil(Math.random() * 8);
    diceTwo = Math.ceil(Math.random() * 8);
    diceThree = Math.ceil(Math.random() * 8);
    let sum = diceOne + diceTwo - diceThree;
    console.log(`${currentPlayer} rolled a ${diceOne} + ${diceTwo} - ${diceThree} = ${sum}`);
    setPlayerData(playerData.map((player) => {
      if (currentPlayer === player.name) {
        console.log({...player, boardPosition: player.boardPosition + sum});
        return {...player, boardPosition: player.boardPosition + sum}
      }
      return player;
    }))
  }

  return (
    <div className="container">
      {playerData.map((player, index) => (
        <div key={player.name}>
          <PlayerButton player={player} index={index} currentPlayer={currentPlayer} setNewCurrentPlayer={setNewCurrentPlayer} moveCurrentPlayer={moveCurrentPlayer} />
          <div>
            <h2>Board position: {player.boardPosition}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
