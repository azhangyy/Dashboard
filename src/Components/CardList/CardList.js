import React from "react";
import Card from "../Card/Card.js";

function CardList(props) {
  /*filter cards here? if topics.tags includes activeTag and then map those?*/

  const filterCourses = props.topics.filter((course) => {
    return props.activeTag === "" || course.tags.includes(props.activeTag);
  });

  //match author data with author_id
  let author_dict = {};
  function getAuthor(props) {
    if (props.authors) {
      for (let idx in props.authors) {
        author_dict[props.authors[idx].id] = props.authors[idx].name;
      }
    }
    return author_dict;
  }

  let author_info = getAuthor(props.authors);

  return (
    //this CSS makes the grid for the cards
    <div className="grid">
      {filterCourses.map((course, idx) => (
        <Card
          key={idx}
          title={course.title}
          image={course.image}
          description={course.description}
          authors={author_info[course.author_id]}
        />
      ))}
    </div>
  );
}
export default CardList;
