import { Carousel } from "flowbite-react";
import actionMovieImg from "../assets/action-movie.jpeg";
import godFatherImg from "../assets/godfather.jpg";
import jokerImg from "../assets/joker.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CarouselComponent() {
  return (
    <div className="mb-6 h-56 sm:h-64 lg:h-[600px] xl:h-[650px]">
      <Carousel>
        <div className="flex h-full  bg-gray-400 dark:bg-gray-700 dark:text-white ">
          <img
            src={godFatherImg}
            alt="..."
            className="flex w-full object-cover object-center "
          />
          <div className=" absolute bottom-0 w-full border-t-8 border-indigo-500 bg-gradient-to-r from-gray-900 to-transparent p-5 text-base backdrop-blur">
            <p className=" text-sm font-thin text-gray-200">
              All your the movies you wished for
            </p>
            <h1 className="pl-2 text-lg">Welcome to CineWish</h1>
            <Link to="/" className="pl-5 font-thin">
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex h-full  bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={jokerImg}
            alt="..."
            className="flex w-full object-cover object-top lg:object-center"
          />
          <div className=" absolute bottom-0 w-full border-t-8 border-purple-500  bg-gradient-to-r from-gray-900 to-transparent p-5 text-base backdrop-blur">
            <p className=" text-sm font-thin text-gray-200">
              Redeem your codes and get movies for free
            </p>
            <h1 className="pl-2 text-lg">More information</h1>
            <Link to="/" className="pl-5 font-thin">
              Register
            </Link>
          </div>
        </div>
        <div className="flex h-full  bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={actionMovieImg}
            alt="..."
            className="flex w-full object-cover object-top"
          />
          <div className=" absolute bottom-0 w-full border-t-8 border-blue-500 bg-gradient-to-r from-gray-900 to-transparent p-5 text-base backdrop-blur">
            <p className=" text-sm font-thin text-gray-200">
              Add to your wish list
            </p>
            <h1 className="pl-2 text-lg">Like the movie</h1>
            <Link to="/" className="pl-5 font-thin">
              Go to wish list
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
