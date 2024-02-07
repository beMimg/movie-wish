import { useParams } from "react-router-dom";
import FetchData from "../components/Fetch";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { OPTIONS } from "../API_INFO";

export default function Genre() {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { id, page } = useParams();

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
      <div className="flex flex-row items-center justify-center bg-black text-white">
        <Link to={{ pathname: `/categories/${id}/${previousPage}` }}>
          <FaChevronLeft />
        </Link>
        <p>{data.page}</p>
        <Link to={{ pathname: `/categories/${id}/${nextPage}` }}>
          <FaChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 items-center justify-center bg-black p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data &&
          data.results.map((movie) => (
            <div key={movie.id} className="flex items-center justify-center">
              <img
                className="inline-block w-[250px] cursor-pointer rounded-xl p-2 duration-300 ease-in-out hover:-translate-y-2"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </div>
          ))}
      </div>
    </>
  );
}
