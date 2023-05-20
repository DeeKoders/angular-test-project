const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = 3000; // or any port number of your choice
app.use(cors());
app.get("/getMovies", (req, res) => {
  console.log("first");
  const API_KEY = process.env.API_KEY;
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving data from TMDB API.");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
