import React, { useState } from "react";
import "./AddedPlayer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddedPlayer = (props) => {
  const playerList = props.addedPlayer;
  const players = [];
  var prices = [];
  var names = [];
  let total = 0;
  for (let i = 0; i < playerList.length; i++) {
    var eachPlayer = playerList[i];
    total += eachPlayer.salary;
    var { name, country, role, salary: arobi, age } = eachPlayer;
    players.push(eachPlayer);
    const playerName = eachPlayer.name;
    const salary = eachPlayer.salary;
    prices.push(salary);
    names.push(playerName);
  }
  return (
    <div>
      <div className="added-player-price">
        <ul>
          <EachCart
            price={prices.map((price) => (
              <li>{price} BDT</li>
            ))}
            name={names.map((name) => (
              <li>{name}</li>
            ))}
          ></EachCart>
        </ul>
      </div>
      <br />
      <br />
      <div className="cart-calculation">
        <h2>Player added: {playerList.length}</h2>
        <h2>Total Team Value: {total}৳</h2>
      </div>
    </div>
  );
};
function EachCart(properties) {
  let name = properties.name;
  let salary = properties.price;
  return (
    <div>
      <h1 className="text-warning text-center">Your team and values</h1>
      <div className="cart-display">
        <h2 className="added-name">Name: {name}</h2>
        <h2>Cost: {salary}</h2>
      </div>
      <br />
      <br />
    </div>
  );
}

export default AddedPlayer;
