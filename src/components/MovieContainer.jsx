export default function MovieContainer({ movie, title }) {
  console.log(movie);
  return (
    <img
      className={`${title === "Trending" ? "w-[250px]" : "w-[150px]"}  inline-block cursor-pointer rounded-xl p-2 duration-300 ease-in-out hover:-translate-y-2`}
      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
    />
  );
}
