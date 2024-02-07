import { Link } from "react-router-dom";
import FetchData from "../components/Fetch";

export default function CategoriesPage() {
  const { data, error, isLoading } = FetchData(
    "https://api.themoviedb.org/3/genre/movie/list",
  );

  function getGenreBackgroundColor(genreId) {
    switch (genreId) {
      case 28: // Action
        return "bg-blue-500";
      case 12: // Adventure
        return "bg-yellow-500";
      case 16: // Animation
        return "bg-green-500";
      case 35: // Comedy
        return "bg-yellow-300";
      case 80: // Crime
        return "bg-gray-700";
      case 99: // Documentary
        return "bg-gray-300";
      case 18: // Drama
        return "bg-indigo-500";
      case 10751: // Family
        return "bg-purple-500";
      case 14: // Fantasy
        return "bg-pink-500";
      case 36: // History
        return "bg-yellow-200";
      case 27: // Horror
        return "bg-red-500";
      case 10402: // Music
        return "bg-teal-500";
      case 9648: // Mystery
        return "bg-indigo-700";
      case 10749: // Romance
        return "bg-pink-300";
      case 878: // Science Fiction
        return "bg-purple-700";
      case 10770: // TV Movie
        return "bg-blue-300";
      case 53: // Thriller
        return "bg-red-700";
      case 10752: // War
        return "bg-gray-500";
      case 37: // Western
        return "bg-brown-500";
      default:
        return "bg-gray-300"; // Default color for unknown genres
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <p>Error...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 bg-black lg:grid-cols-4 xl:grid-cols-5  ">
      {data &&
        data.genres.map((genre) => {
          return (
            <Link
              to={{ pathname: `/categories/${genre.id.toString()}/${1}` }}
              key={genre.id}
              className={`${getGenreBackgroundColor(genre.id)} m-4 flex h-44 items-center justify-center rounded bg-red-500 bg-gradient-to-r from-gray-500 to-transparent  p-5 text-base backdrop-blur`}
            >
              <p>{genre.name}</p>
            </Link>
          );
        })}
    </div>
  );
}
