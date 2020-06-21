import React from "react";
import Card from "/Users/angela/Documents/GitHub/Dashboard/src/Components/Card/Card.js";

function CardList(props) {
  console.log(props.topics);

  /*filter cards here? if topics.tags includes activeTag*/

  return (
    <div className="grid">
      {props.topics.map((course, idx) => (
        <Card
          key={idx}
          title={course.title}
          image={course.image}
          description={course.description}
        />
      ))}
    </div>
  );
}
export default CardList;
