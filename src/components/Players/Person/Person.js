import React from "react";
import "./Person.css";

const Person = (props) => {
  console.log(props.player);
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
          <h2>Cost: {salary}</h2>
        </div>
      </div>
    </div>
  );
};

export default Person;
