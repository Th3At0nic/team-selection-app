import React, { useState } from "react";
import "./AddedPlayer.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap

const AddedPlayer = (props) => {
  const playerList = props.addedPlayer;
  var prices = [];
  var names = [];
  let total = 0;
  for (let i = 0; i < playerList.length; i++) {
    var eachPlayer = playerList[i];
    total += eachPlayer.salary;
    const playerName = eachPlayer.name;
    const salary = eachPlayer.salary;
    prices.push(salary);
    names.push(playerName);
  }
  return (
    <div>
      <div className="added-player-price">
        <ul>
          {/* calling function from the below of this same component */}
          <EachCart
            price={prices.map((price) => (
              <li>{price} BDT</li>
            ))} //mapping on prices & names from line nmbr 7 & 8.
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
