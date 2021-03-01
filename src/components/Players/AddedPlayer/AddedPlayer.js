import React, { useState } from "react";
import "./AddedPlayer.css";

const AddedPlayer = (props) => {
  console.log(props.addedPlayer);
  const playerList = props.addedPlayer;
  console.log(playerList);

  let total = 0;
  for (let i = 0; i < playerList.length; i++) {
    let eachPlayer = playerList[i];
    console.log(eachPlayer);
    total += eachPlayer.salary;
    var { name, country, role, salary, age } = eachPlayer;
  }

  //   let total = playerList.reduce(((total, player) => total + player.salary, 0));

  return (
    <div>
      <div className="cart-calculation">
        <h2>Player added: {playerList.length}</h2>
        <h2>Team Value: {total}৳</h2>
        <h2>
          Players list: <li>{name}</li>
        </h2>
      </div>
      <br />
      <br />
      <div className="each-cart-detail">
        <h4>Name: {name}</h4>
      </div>
    </div>
  );
};

export default AddedPlayer;
