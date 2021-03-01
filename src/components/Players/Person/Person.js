import React from "react";

const Person = (props) => {
  console.log(props.player);
  const { name, country } = props.player;
  return (
    <div>
      <h3>This is {name}</h3>
    </div>
  );
};

export default Person;
