import { useParams } from "react-router-dom";
import FetchData from "../components/Fetch";

export default function Genre() {
  let { id } = useParams();

  const { data, error, isLoading } = FetchData(
    `https://movies-app-demo-0guf.onrender.com/genre/${id}`,
  );

  if (isLoading) {
    return (
      <div className="h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  console.log(data);
  if (error) return <p>Error...</p>;

  return (
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
  );
}
