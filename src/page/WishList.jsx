import { Link } from "react-router-dom";
import { useWishList } from "../context/MovieContext";
import MovieContainer from "../components/MovieContainer";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function WishList() {
  const { wishList, setWishList } = useWishList();

  const ref = useRef();

  function handleButton(direction) {
    if (direction === "left") {
      ref.current.scrollLeft = ref.current.scrollLeft - 500;
    }
    if (direction === "right") {
      ref.current.scrollLeft = ref.current.scrollLeft + 500;
    }
  }

  return (
    <div className="relative min-h-[550px] bg-black text-white">
      {wishList.length === 0 && (
        <div className="absolute flex h-full  w-full flex-col items-center gap-7 p-6 text-base md:flex-row md:justify-evenly">
          <div className="flex flex-col">
            <h2>Your wish list is empty</h2>
            <Link className="text-blue-600" to="/">
              Go back to homepage
            </Link>
          </div>
          <p className="text-right font-light opacity-85 md:w-[400px] md:text-left lg:w-[600px]">
            Imagine a cozy evening with rain tapping on your window. You're in
            the mood for a movie that resonates with your emotions. Consider the
            feelings you crave – heartwarming, thrilling, or comforting. Reflect
            on past stories that stayed with you and explore directors or actors
            you love. Think about dreamy settings or intriguing eras. Ask for
            recommendations from like-minded friends. Don't shy away from the
            unknown; sometimes, the best experiences come from unexpected finds.
            Let your movie choice be a personal exploration, a reflection of
            your emotions, and a source of comfort on quiet evenings.
          </p>
        </div>
      )}
      {wishList.length > 0 && (
        <div className="absolute flex h-full w-full items-center justify-center">
          <h1 className="absolute left-0 top-0 p-4 font-extrabold">
            Wish List - {wishList.length}
          </h1>
          <div className="relative flex items-center ">
            <FaChevronLeft
              className=" hidden h-32 cursor-pointer opacity-40 transition-all hover:scale-110 hover:opacity-100 md:flex"
              onClick={() => handleButton("left")}
            />
            <div
              ref={ref}
              className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
            >
              {wishList.map((movie) => (
                <MovieContainer key={movie.id} title="Trending" movie={movie} />
              ))}
            </div>
            <FaChevronRight
              className=" hidden h-32 cursor-pointer opacity-40 transition-all hover:scale-110 hover:opacity-100 md:flex "
              onClick={() => handleButton("right")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
