import { useParams } from "react-router-dom";
import FetchData from "../components/Fetch";

export default function Movie() {
  let { name, id } = useParams();
  const { data, error, isLoading } = FetchData(
    `https://api.themoviedb.org/3/movie/${id}`,
  );

  if (data) {
    console.log(data);
  }

  return (
    <>
      {/* <p>{id}</p> */}
      {data && (
        <div>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
              className="flex h-[400px] object-cover object-center"
            />
            <div className="z-15 absolute -bottom-[80px] h-48 w-full  bg-black opacity-60"></div>
            <div className="z-15 absolute -bottom-[70px] flex flex-row items-center gap-3 bg-transparent pl-7 text-white">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                className="h-[150px]"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="font-bold">{data.original_title}</h1>
                <p className="text-lg opacity-80">{data.tagline}</p>
                <p className="text-lg opacity-80">
                  {data.runtime} min - {data.release_date}
                </p>
                <p className="absolute -top-5 right-3 text-base font-bold">
                  {data.vote_average}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[600px] bg-black p-6 pt-[80px] text-white">
            <p className="text-base opacity-80">
              {data.genres.map((genre) => `${genre.name} `)}
            </p>
            <p className="mt-4 text-base">{data.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}
