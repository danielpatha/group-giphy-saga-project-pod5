require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
// import axios from 'axios';


const router = express.Router();


router.get('/', (req, res) => {

  console.log('REQ.PARAMS----->', req.query.q);
  
  axios({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/search`,
    params: {
      api_key: process.env.GIPHY_API_KEY,
      q: `${req.query.q}`,
      limit: 10
    }
  })
    .then((apiRes) => {
     
      let result = []
      console.log('######################', apiRes.data.data[0].images.downsized.url)
      
      apiRes.data.data.map(item => (
        result.push(item.images.downsized.url)
      ))
      console.log('************************', result);
      res.send(result);
    
    })
    .catch((err) => {
      console.error('API req failed', err);
      res.sendStatus(500);
    });
});



module.exports = router;
