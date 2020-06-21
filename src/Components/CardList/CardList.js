import React from "react";
import Card from "../Card/Card.js";

function CardList(props) {
  /*filter cards here? if topics.tags includes activeTag and then map those?*/

  const filterCourses = props.topics.filter((course) => {
    console.log("yes", course.tags.includes(props.activeTag));
    return course.tags.includes(props.activeTag);
  });

  console.log("course filter", filterCourses);

  return (
    <div className="grid">
      {filterCourses.map((course, idx) => (
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
