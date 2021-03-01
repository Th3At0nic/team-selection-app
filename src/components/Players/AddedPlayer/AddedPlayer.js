import React, { useState } from "react";
import Separate from "../../Separate/Separate";
import "./AddedPlayer.css";

const AddedPlayer = (props) => {
  console.log(props.addedPlayer);
  const playerList = props.addedPlayer;
  console.log(playerList);

  const players = [];
  let total = 0;
  for (let i = 0; i < playerList.length; i++) {
    var eachPlayer = playerList[i];
    console.log(eachPlayer);
    total += eachPlayer.salary;
    var { name, country, role, salary, age } = eachPlayer;
    players.push(eachPlayer);
  }

  //   let total = playerList.reduce(((total, player) => total + player.salary, 0));

  return (
    <div>
      <div className="each-cart-detail">
        {/* <h4>Name: {name}</h4>
        <h4>Country: {country}</h4>
        <h4>Role: {role}</h4>
        <h4>Cost: {salary}</h4> */}
        <Separate players={players}></Separate>
      </div>
      <br />
      <br />
      <div className="cart-calculation">
        <h2>Player added: {playerList.length}</h2>
        <h2>Team Value: {total}৳</h2>
      </div>
    </div>
  );
};
// function Separate(properties) {
//   console.log(properties);
//   const { name, age } = properties;
//   //   console.log(name);
//   //   const [] = properties;
//   //   console.log(name, country);
//   return (
//     <div>
//       <h2>Name: {name} </h2>
//       <h2>Age: </h2>
//       <br />
//       <br />
//     </div>
//   );
// }

export default AddedPlayer;
