import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search/Search.js";
import TagList from "./Components/TagList/TagList.js";
import CardList from "./Components/CardList/CardList.js";
import courses from "./Components/Courses.js";

const topics = [courses][0];

function App(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [authors, setAuthors] = useState({});

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
    setSearchTerm(e.target.value);
  }

  /*filter the tags*/
  const filterTopic = Object.entries(unique).filter((key) => {
    return key[0].includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    getAuthorData();
  }, []);

  async function getAuthorData() {
    fetch(
      "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json"
    )
      .then((resp) => resp.json())
      .then((json) => setAuthors(json));
  }
  return (
    <div>
      <Header />
      <div className="tag-container black-border">
        <Search handleInput={handleInput} />
        <TagList
          filterTopic={filterTopic}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </div>
      <CardList topics={topics} activeTag={activeTag} authors={authors} />
    </div>
  );
}

export default App;
