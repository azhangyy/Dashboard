require("./db.js");
//const mongoURI = process.env.MONGO_URI;

//connect MONGOOSE and GRAPHQL

const courses = [
  {
    id: 1,
    slug: "learn-javascript",
    title: "Learn Javascript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    description:
      "Learn the fundamentals of Javascript, the programming language of the web.",
    author_id: "123",
    tags: ["programming", "javascript", "intro", "web"],
    pro: false,
  },
  {
    id: 2,
    slug: "learn-html",
    title: "Learn HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description:
      "Learn the basics of HTML, the essential language of the web. This course covers version 5 of HTML.",
    author_id: "124",
    tags: ["programming", "html", "intro", "web"],
    pro: false,
  },
  {
    id: 3,
    slug: "test-driven-development",
    title: "Test-driven Development",
    image:
      "https://camo.githubusercontent.com/b5639de5cfa97c51598b60b13a1061498afe2acb/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3244324b343533313278304d31713243306133502f6a6573742d6c6f676f2e737667",
    description:
      "Learn the programming best-practice, Test Driven Development, while building fullstack JavaScript web applications.",
    author_id: "123",
    tags: ["programming", "tdd"],
    pro: true,
  },
  {
    id: 4,
    slug: "learn-ruby",
    title: "Learn Ruby",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    description:
      "Learn to program in Ruby, a flexible language used to create sites like Codecademy. Ruby is a powerful yet beginner-friendly language used for professional web apps all over the world.",
    author_id: "125",
    tags: ["programming", "ruby", "intro"],
    pro: false,
  },
  {
    id: 5,
    slug: "learn-css",
    title: "Learn CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    description:
      "Learn how to style and visually organize HTML with CSS. This course covers version 3 of CSS.",
    author_id: "126",
    tags: ["design", "web", "css", "intro"],
    pro: true,
  },
];

const express = require("express");
const express_graphql = require("express-graphql");
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLInt,
} = require("graphql");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const test = express();

const cors = require("cors");

test.use(cors());

const CourseSchema = new Schema({
  id: Number,
  slug: String,
  title: String,
  image: String,
  description: String,
  author_id: String,
  tags: [String],
  pro: Boolean,
});

const courseModel = mongoose.model("courses", CourseSchema);

//this created a database
//courses.forEach((course) => {
// courseModel.create(course);
//});

//write mutation to do that to get collections

const courseType = new GraphQLObjectType({
  name: "Course",
  description: "This has all our course data",
  fields: {
    _id: { type: GraphQLID },
    id: { type: GraphQLInt },
    slug: { type: GraphQLString },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    author_id: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    pro: { type: GraphQLBoolean },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      courses: {
        type: new GraphQLList(courseType),
        resolve: async (_, __) => {
          const testing = await courseModel.find().exec();
          console.log(testing);
          return testing;
        },
      },
    }),
  }),
});

test.use(
  "/graphql",
  express_graphql({
    schema: schema,
    graphiql: true,
  })
);

test.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
