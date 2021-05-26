//const express = require('express');
//var { graphqlHTTP } = require('express-graphql');
import express from 'express';
import { graphqlHTTP } from "express-graphql";
import schema from './shema';

//routes
//const router = require('./routes/routes');

const app = express();

const port = process.env.PORT || 3010;
require('dotenv').config();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}))


app.listen(port, () => {
  console.log('server running in port: ', port);
});