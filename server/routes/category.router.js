require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
// import axios from 'axios';


const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  axios({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/random',
      params: {
          api_key: process.env.GIPHY_API_KEY,
          q: 'cats',
          limit: 10
      }
  })
      .then((apiRes) => {
          // send back the data from giphy
          res.send(apiRes.data);
          console.log('data is', apiRes.data);

          // You can send back your own custom object, too!
          // res.send({
          //     goodUrlToUse: apiRes.data.url
          // })
      })
      .catch((err) => {
          console.error('API req failed', err);
          res.sendStatus(500);
      });
});



module.exports = router;
