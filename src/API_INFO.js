const KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDU3ZGExMTg4ODNhMzEzMmYwNGEwNzUxZmRmNjY3YiIsInN1YiI6IjY1YmY2YzMyYmE0ODAyMDE2MTZhOTkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ArwbbxZByQ8RHZ3Tcu1wNEeEwDqdxuzIUPn7U9d2eRo";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: KEY,
  },
};

export const API_INFO = [
  {
    title: "Trending",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    id: 1,
  },
  {
    title: "Popular",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    id: 2,
  },
];
