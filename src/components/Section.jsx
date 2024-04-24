import FetchData from "./Fetch";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import MovieContainer from "./MovieContainer";
import LoadingSpinner from "./LoadingSpinner";

export default function Section({ title, url, id, seeAll }) {
  const [smallerData, setSmallerData] = useState();
  const { data, error, isLoading } = FetchData(url);
  const ref = useRef();

  function handleButton(direction) {
    if (direction === "left") {
      console.log("left");
      ref.current.scrollLeft = ref.current.scrollLeft - 500;
    }
    if (direction === "right") {
      ref.current.scrollLeft = ref.current.scrollLeft + 500;
    }
  }

  if (error) {
    return <div></div>;
  }
  useEffect(() => {
    if (data) {
      const smallerArray = data.results.splice(0, 15);
      setSmallerData(smallerArray);
    }
  }, [data]);

  return (
    <div className="pb-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="pl-2 text-base font-bold md:pl-8">{title}</h2>
        {seeAll && (
          <Link
            to={{ pathname: `/categories/${id}/1` }}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="hoved:text-white  text-xs text-gray-500 transition-all"
          >
            SEE ALL
          </Link>
        )}
      </div>
      <div className="relative flex items-center ">
        <FaChevronLeft
          className=" hidden h-32 cursor-pointer opacity-40 transition-all hover:scale-110 hover:opacity-100 md:flex"
          onClick={() => handleButton("left")}
        />
        <div
          ref={ref}
          className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {isLoading && (
            <div className="flex w-full items-center justify-center p-4">
              <LoadingSpinner />
            </div>
          )}
          {smallerData &&
            !isLoading &&
            smallerData.map((movie) => (
              <MovieContainer key={movie.id} title={title} movie={movie} />
            ))}
        </div>

        <FaChevronRight
          className=" hidden h-32 cursor-pointer opacity-40 transition-all hover:scale-110 hover:opacity-100 md:flex "
          onClick={() => handleButton("right")}
        />
      </div>
    </div>
  );
}
