import { useEffect, useRef, useState } from "react";
import CarouselComponent from "../components/Caroussel";
import Section from "../components/Section";
import { API_INFO } from "../API_INFO";
import FetchData from "../components/Fetch";

export default function WelcomePage() {
  const { data, error, isLoading } = FetchData(
    "https://api.themoviedb.org/3/genre/movie/list",
  );

  const forYouRef = useRef();
  useEffect(() => {
    forYouRef.current.focus();
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="bg-black p-6 text-white">
      <button
        ref={forYouRef}
        className=" mb-4 w-fit rounded-3xl bg-gray-400 p-3 text-base  "
      >
        For You
      </button>
      <CarouselComponent />
      {API_INFO.map((category) => (
        <Section
          title={category.title}
          url={category.url}
          key={category.id}
          seeAll={false}
        />
      ))}
      {data &&
        data.genres.map((movie) => (
          <Section
            key={movie.id}
            title={movie.name}
            url={`https://api.themoviedb.org/3/discover/movie?&with_genres=${movie.id}&page=1`}
            seeAll={true}
            id={movie.id}
          />
        ))}
    </div>
  );
}
