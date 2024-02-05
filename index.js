const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/trending", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options,
  )
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.get("/popular", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  )
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.get("/action", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=27", options)
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
