const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const genreIDS = [
  28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770,
  53, 10752, 37,
];

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

app.get("/list", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  fetch("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((response) => response.json())
    .then((data) => res.json(data))

    .catch((err) => console.error(err));
});

genreIDS.forEach((id) => getGenre(id));

export function getGenre(id) {
  app.get(`/genre/${id}`, (req, res) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?&with_genres=${id}`,
      options,
    )
      .then((response) => response.json())
      .then((data) => res.json(data))
      .catch((err) => console.error(err));
  });
}

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
