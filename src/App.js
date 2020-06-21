import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search/Search.js";
import TagList from "./Components/TagList/TagList.js";
import CardList from "./Components/CardList/CardList.js";
import courses from "./Components/Courses.js";

const topics = [courses][0];
console.log(topics[0]["tags"]);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");

  /*get unique courses and their counts*/
  function handleUnique(result) {
    const unique = {};

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i]["tags"].length; j++) {
        let value = result[i]["tags"][j];
        if (!unique[value]) {
          unique[value] = 1;
        } else {
          unique[value] += 1;
        }
      }
    }
    return unique;
  }

  /*new dictionary*/
  const unique = handleUnique(topics);

  function handleInput(e) {
    /*console.log(e.target.value);*/
    setSearchTerm(e.target.value);
  }

  /*filter the tags*/
  const filterTopic = Object.entries(unique).filter((key) => {
    return key[0].includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Header />
      <div className="flex-container">
        <Search handleInput={handleInput} />
        <TagList
          filterTopic={filterTopic}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </div>
      <CardList topics={topics} activeTag={activeTag} />
    </div>
  );
}

export default App;
