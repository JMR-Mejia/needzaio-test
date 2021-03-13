"use strict";

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const { makeExecutableSchema } = require("graphql-tools");

const { port } = require("./config");
const resolvers = require("./lib/resolver");

// config
const app = express();
app.use(express.json());

// definition schema
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/api-docs",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: false,
  })
);

app.get('/', function (req , res) {
  res.redirect('/api')
})

app.listen(port);
