import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search/Search.js";
import TagList from "./Components/TagList/TagList.js";
import CardList from "./Components/CardList/CardList.js";
//import courses from "./Components/Courses.js";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const get_courses = gql`
  {
    courses {
      id
      slug
      title
      image
      description
      author_id
      tags
      pro
    }
  }
`;

//const topics = [courses][0];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [authors, setAuthors] = useState({});
  const [topics, setTopics] = useState([]);

  /*use useEffect because you only want to retrieve the data once from API */
  useEffect(() => {
    client
      .query({
        query: get_courses,
      })
      .then(function (result) {
        const course_data = result.data.courses;
        setTopics(course_data);
      });
  }, []);

  //console.log(topics);

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
