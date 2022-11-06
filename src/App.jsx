import React, { useEffect, useState } from 'react';
import { init } from '../back/main';
import { MainCharacter } from '../back/models/character/mainCharacter.model';
import PlayerWindow from './PlayerWindow';
const App = () => {
  const [player, setPlayer] = useState();
  const createPlayer = () => {
    const MainPlayer = new MainCharacter(100, []);
    setPlayer(MainPlayer);
  };

  useEffect(() => {}, [player.gold]);
  return (
    <div>
      <button onClick={createPlayer}>Iniciar</button>
      <button
        onClick={() => {
          console.log(player.allData);
        }}
      >
        Iniciar
      </button>
      <button
        onClick={() => {
          player.addGold(50);
        }}
      >
        +50
      </button>

      <PlayerWindow></PlayerWindow>
      {player?.gold}
    </div>
  );
};

export default App;
