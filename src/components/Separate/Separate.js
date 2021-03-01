import React, { useState } from "react";

const Separate = (props) => {
  console.log(props);
  const cartPlayers = props.players;
  console.log(cartPlayers);
  let array = [];
  array = cartPlayers;
  //   array = { ...array, ...cartPlayers };
  console.log(array);
  //   const { name, country, salary, age, role } = cartPlayers;
  //   for (let i = 0; i < cartPlayers.length; i++) {
  //     var element = cartPlayers[i];
  //     console.log(element.name);
  //   }
  //   const eachPlayer = cartPlayers.map((cricketer) => cricketer);
  //   console.log(eachPlayer);

  return (
    <div>
      {/* <Player
        eachCricketer={cartPlayers.map((cricketer) => cricketer)}
      ></Player> */}

      {/* <Player eachCricketer={array.map((cricketer) => cricketer)}></Player> */}
      <Player eachCricketer={array[0]}></Player>
      <Player eachCricketer={array[1]}></Player>
      <Player eachCricketer={array[2]}></Player>
    </div>
  );
};

function Player(properties) {
  console.log(properties);
  const { name, age } = properties;
  //   console.log(name);
  //   const [] = properties;
  //   console.log(name, country);
  return (
    <div>
      <h2>Name: {name} </h2>
      <h2>Age: </h2>
      <br />
      <br />
    </div>
  );
}

export default Separate;
