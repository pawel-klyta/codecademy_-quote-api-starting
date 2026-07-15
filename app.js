const express = require('express');
const cors = require('cors');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

app.use(cors());
app.use(express.static('public'));

// GET /api/quotes

app.get("/api/quotes", (req, res, next) => {
  let result = [];
  if (req.query.person) {
    quotes.forEach( quote => {
      if (quote.person === req.query.person) {
        result.push(quote);
      };
    });
  } else {
    result = quotes;
  };

  const toSend = { quotes: result };
  res.status(200).send(toSend);
});

// GET /api/quotes/random
app.get("/api/quotes/random", (req, res, next) => {
  const  toSend = { quote: getRandomElement(quotes)}
  res.status(200).send(toSend);
});

// POST /api/quotes
app.post("/api/quotes", (req, res, next) => {
  if (req.query.person && req.query.quote) {
    const newQuote = {
      quote: req.query.quote ,
      person: req.query.person
    };
    quotes.push(newQuote);
    res.status(201).send({ quote: newQuote });
  } else {
    res.status(400).send();
  };
});

// export app for use in main.js and for testing
module.exports = {
  app
};

