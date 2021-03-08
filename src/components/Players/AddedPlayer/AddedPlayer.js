import React, { useState } from "react";
import "./AddedPlayer.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importing bootstrap

const AddedPlayer = (props) => {
  const playerList = props.addedPlayer;
  var prices = [];
  var names = [];

  for (let i = 0; i < playerList.length; i++) {
    var eachPlayer = playerList[i];

    const playerName = eachPlayer.name;
    const salary = eachPlayer.salary;

    if (names.indexOf(playerName) === -1) names.push(playerName);
    //to prevent duplicate values,u cant add same player multiple times
    if (prices.indexOf(salary) === -1) prices.push(salary); //preventing duplicates.
  }

  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    const eachSalary = prices[i];

    total = total + eachSalary;
  }

  let addedPlayer = 0;
  for (let i = 0; i < names.length; i++) {
    const selected = names[i];
    addedPlayer = addedPlayer + 1;
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
        <h2>Player added: {addedPlayer}</h2>
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
