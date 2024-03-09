import { Link } from "react-router-dom";

export default function MovieContainer({ movie, title }) {
  let stringWithoutSpecialChars = movie.title.replace(/[?:#]/g, "");

  let stringWithUnderscores = stringWithoutSpecialChars.replace(/\s+/g, "_");

  return (
    <Link
      to={{
        pathname: `/movie/${stringWithUnderscores}/${movie.id.toString()}`,
      }}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <img
        className={`${title === "Trending" ? "w-[250px]" : "w-[150px]"}  inline-block cursor-pointer rounded-xl p-2 transition-all duration-300 ease-in-out hover:-translate-y-2`}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
    </Link>
  );
}
