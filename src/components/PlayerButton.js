import React from 'react';

const PlayerButton = ({ player: { name }, index, currentPlayer, setNewCurrentPlayer, moveCurrentPlayer }) => {

  const handleButtonClick = () => {
    moveCurrentPlayer();
    setNewCurrentPlayer();
  }

  return (
    <button disabled={name !== currentPlayer} type="button" id={index + 1} className={`player${index + 1}-btn`} onClick={handleButtonClick}>{name}</button>
  )
}

export default PlayerButton;