import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import "./Person.css";

const Person = (props) => {
  console.log(props);
  const handleAddPlayer = props.handleAddPlayer;
  const { name, country, img, salary, age, role } = props.player;
  return (
    <div className="person">
      <div className="person-img">
        <img src={img} alt="" />
      </div>
      <div className="person-detail">
        <h2>Name: {name}</h2>
        <div className="detail-style">
          <h3>Country: {country}</h3>
          <h3>Age: {age}</h3>
          <h3>Role: {role}</h3>
          <h2>Base Price: {salary}৳</h2>
        </div>
        <button
          onClick={() => handleAddPlayer(props.player)}
          className="cart-btn"
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add player
        </button>
      </div>
    </div>
  );
};

export default Person;
