import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { OPTIONS } from "../API_INFO";
import MovieContainer from "../components/MovieContainer";

export default function Genre() {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState();
  let { id, page } = useParams();

  useMemo(async () => {
    return fetch("https://api.themoviedb.org/3/genre/movie/list")
      .then((res) => res.json())
      .then((data) => setGenres(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("h"));
  }, []);

  let genre;
  if (genres) {
    genre = genres.genres.filter((genre) => genre.id === parseInt(id));
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?&with_genres=${id}&page=${page}`,
      OPTIONS,
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id, page]);

  if (isLoading) {
    return (
      <div className="h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  let nextPage = parseInt(page) + 1;

  if (data) {
    if (nextPage === data.total_pages) {
      nextPage = data.total_pages;
    }
  }

  let previousPage = parseInt(page) - 1;
  if (previousPage === 0) {
    previousPage = 1;
  }

  if (error) return <p>Error...</p>;

  return (
    <>
      <div className="relative flex flex-row justify-between bg-black text-white">
        {genres && (
          <h1 className=" xl pl-7 text-4xl font-extrabold lg:pl-12 2xl:pl-20 2xl:text-6xl">
            {genre[0].name}
          </h1>
        )}
        <div className="flex flex-row items-center justify-center  pr-3 xl:hidden ">
          <Link to={{ pathname: `/categories/${id}/${previousPage}` }}>
            <FaChevronLeft />
          </Link>
          <p className="pb-1">{data.page}</p>
          <Link to={{ pathname: `/categories/${id}/${nextPage}` }}>
            <FaChevronRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center bg-black p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data &&
          data.results.map((movie) => (
            <div key={movie.id} className="flex items-center justify-center">
              <MovieContainer movie={movie} title="Trending" />
            </div>
          ))}
      </div>
      <div className="flex flex-row items-center justify-center bg-black pb-6 text-white">
        <Link to={{ pathname: `/categories/${id}/${previousPage}` }}>
          <FaChevronLeft />
        </Link>
        <p className="pb-1">{data.page}</p>
        <Link to={{ pathname: `/categories/${id}/${nextPage}` }}>
          <FaChevronRight />
        </Link>
      </div>
    </>
  );
}
