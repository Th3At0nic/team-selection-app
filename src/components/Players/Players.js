import React, { useEffect, useState } from "react";
import "./Players.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap
import data from "../../data/data.json";
import Person from "./Person/Person";
import AddedPlayer from "./AddedPlayer/AddedPlayer";

const Players = () => {
  const [players, setPlayers] = useState(data);
  const [addPlayer, setAddPlayer] = useState([]);
  const handleAddPlayer = (player) => {
    const newAdded = [...addPlayer, player];
    setAddPlayer(newAdded);
  };

  return (
    <div>
      <h1 className="text-danger mt-3">Total registered: {players.length} </h1>
      <div className="players-container">
        <div className="person-container">
          {/*mapping on players line nmbr 9*/}
          {players.map((player) => (
            <Person
              handleAddPlayer={handleAddPlayer}
              player={player}
              key={player.id}
            ></Person> //*calling function from person component.
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

// sorry, i tried my best but failed to use useEffect,
//i was not getting data after fatching local json file. thats why i didnt use useEffect.
// thank you..
