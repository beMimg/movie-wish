import { useParams } from "react-router-dom";
import FetchData from "../components/Fetch";
import ReactPlayer from "react-player";
import { useWishList } from "../context/MovieContext";
import { useHandleWishListBtns } from "../context/MovieContext";
import HandleWishListBtn from "../components/HandleWishListBtn";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Movie() {
  let { name, id } = useParams();
  const { data, error, isLoading } = FetchData(
    `https://api.themoviedb.org/3/movie/${id}`,
  );

  const { addMovieToWishList, removeMovieFromWishList } =
    useHandleWishListBtns();
  const { wishList, setWishList } = useWishList();

  const {
    data: videoData,
    error: videoDataError,
    isLoading: videoDataIsLoading,
  } = FetchData(`https://api.themoviedb.org/3/movie/${id}/videos`);

  let trailerId;
  if (videoData) {
    if (videoData.results.length === 1) {
      trailerId = videoData.results[0];
    }
    trailerId = videoData.results.findIndex(
      (video) => video.type === "Trailer" && video.iso_639_1 === "en",
    );
  }

  let movieIsInWishList =
    data?.id && wishList.some((movie) => movie.id === data.id);

  if (isLoading) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-black text-white">
        <p className="text-center">
          We apolagize, unfortnately this movie doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
              className="flex max-h-[700px] min-h-[400px] w-full object-cover object-top lg:object-center"
            />
            <div className="z-15 absolute -bottom-[80px] h-48 w-full  bg-black opacity-60"></div>
            <div className="z-15 absolute -bottom-[85px] flex w-full flex-row items-center gap-3 bg-transparent pl-7 text-white xl:pl-[120px] 2xl:pl-[380px]">
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
                <p className="absolute  -top-5 right-3 text-base font-bold text-yellow-300">
                  {data.vote_average}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black">
            <div className="flex flex-col gap-4 bg-black p-6 pt-[120px] text-base text-white   lg:gap-20 lg:pb-20 xl:w-[1200px]">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
                <p className=" opacity-80">
                  {data.genres.map((genre) => `${genre.name} / `)}
                </p>
                {!movieIsInWishList ? (
                  <HandleWishListBtn
                    type="add"
                    handleClick={() =>
                      addMovieToWishList(data.title, data.id, data.poster_path)
                    }
                  />
                ) : (
                  <HandleWishListBtn
                    type="remove"
                    handleClick={() => removeMovieFromWishList(data.id)}
                  />
                )}
              </div>
              <p>{data.overview}</p>
              {videoData && videoData.results.length > 0 ? (
                <div className="flex h-[400px] w-full items-center justify-center self-center xl:h-[720px] xl:w-[1280px]">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls={true}
                    url={`https://www.youtube.com/watch?v=${videoData.results[trailerId].key}`}
                  ></ReactPlayer>
                </div>
              ) : (
                <p>
                  We apologize, but unfortunately, we are unable to provide a
                  trailer for this movie at the moment.
                </p>
              )}
              <div>
                <p className=" lg: opacity-80">Productions:</p>
                {data.production_companies.map((prod) => (
                  <li key={prod.name} className="text-base ">
                    {prod.name}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
