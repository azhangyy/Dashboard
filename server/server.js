require("./db.js");
const mongoURI = process.env.MONGO_URI;

//create server??? idkk??

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(8080);

//connect MONGOOSE and GRAPHQL

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

const test = express();

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courseModel = mongoose.model("course", {
  id: Number,
  slug: String,
  title: String,
  image: String,
  description: String,
  author_id: String,
  tags: [String],
  pro: Boolean,
});

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
    fields: {
      courses: {
        type: new GraphQLList(courseType),
        resolve: async (root, args, context, info) => {
          let testing = await courseModel.find().exec();
          console.log(testing);
          return testing;
        },
      },
    },
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
