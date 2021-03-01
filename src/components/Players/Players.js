import React, { useState } from "react";
import "./Players.css";
import data from "../../data/data.json";
import Person from "./Person/Person";

const Players = () => {
  const [players, setPlayers] = useState(data);
//   console.log(data);
  return (
    <div>
      <h2>This is players</h2>
      <h1>Total Players in auction: {players.length} </h1>
      <div className="players-container">
        <div className="person-container">
          {players.map((player) => (
            <Person player={player} key={player.id}></Person>
          ))}
        </div>
        <div className="cart-container">
          <h2>This is cart</h2>
        </div>
      </div>
    </div>
  );
};
export default Players;
