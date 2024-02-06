const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_KEY,
  },
};

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/trending", (req, res) => {
  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options,
  )
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.get("/popular", (req, res) => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  )
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.get("/action", (req, res) => {
  fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=27", options)
    .then((response) => response.json())
    .then((data) => res.json(data.results))
    .catch((err) => console.error(err));
});

app.get("/list", (req, res) => {
  fetch("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((response) => response.json())
    .then((data) => res.json(data))

    .catch((err) => console.error(err));
});

// GENRES
async function fetchData() {
  let genres;
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    options,
  );
  genres = await res.json();
  return genres;
}

async function main() {
  let genresIDS = await fetchData();
  console.log(genresIDS);
  genresIDS.genres.map((genre) => getGenre(genre.id));
}

main();

export function getGenre(id) {
  app.get(`/genre/${id}`, (req, res) => {
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
