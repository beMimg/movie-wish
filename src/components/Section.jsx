import FetchData from "./Fetch";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function Section({ title, url }) {
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

  return (
    <div className="pb-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="pl-2 text-base font-bold md:pl-8">{title}</h2>
        <h3 className="text-xs  text-gray-500">SEE ALL</h3>
      </div>
      <div className="relative flex items-center ">
        <FaChevronLeft
          className=" hidden h-32 cursor-pointer opacity-40 md:flex"
          onClick={() => handleButton("left")}
        />
        <div
          ref={ref}
          className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {isLoading ? <p>Loading...</p> : error && <p>"Error..."</p>}
          {data &&
            !isLoading &&
            data.results.map((movie) => (
              <img
                key={movie.id}
                className={`${title === "Trending" ? "w-[250px]" : "w-[150px]"}  inline-block cursor-pointer rounded-xl p-2 duration-300 ease-in-out hover:-translate-y-2`}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            ))}
        </div>
        <FaChevronRight
          className=" hidden h-32 cursor-pointer opacity-40 md:flex"
          onClick={() => handleButton("right")}
        />
      </div>
    </div>
  );
}
