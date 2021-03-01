import React, { useState } from "react";
import "./Players.css";
import data from "../../data/data.json";
import Person from "./Person/Person";
import AddedPlayer from "./AddedPlayer/AddedPlayer";

const Players = () => {
  const [players, setPlayers] = useState(data);
  //   console.log(data);
  const [addPlayer, setAddPlayer] = useState([]);
  const handleAddPlayer = (player) => {
    console.log("person added", player);
    const { name, role, salary } = player;
    console.log(name);
    const newAdded = [...addPlayer, player];
    setAddPlayer(newAdded);
  };

  return (
    <div>
      <h2>This is players</h2>
      <h1>Total Players in auction: {players.length} </h1>
      <div className="players-container">
        <div className="person-container">
          {players.map((player) => (
            <Person
              handleAddPlayer={handleAddPlayer}
              player={player}
              key={player.id}
            ></Person>
          ))}
        </div>
        <div className="cart-container">
          <AddedPlayer addedPlayer={addPlayer}></AddedPlayer>
        </div>
      </div>
    </div>
  );
};
export default Players;
