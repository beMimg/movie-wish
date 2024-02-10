import { Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import Title from "./Title";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-zinc-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:pt-24 ">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            className="inline-block rounded-full bg-yellow-300 p-2 text-black shadow transition hover:bg-yellow-500 sm:p-3 lg:p-4"
            to="/"
          >
            <span className="sr-only">Back to top</span>

            <div>
              <MdLocalMovies />
            </div>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-white lg:justify-start">
              <Title />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-gray-500 lg:text-left">
              Elevate your movie nights with CineWish – Where Every Film is a
              Wish Granted. Explore, Enjoy, and Embrace the Magic of Cinema!
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 text-base md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li></li>

            <li>
              <Link
                to="/"
                className="text-gray-500 transition-all hover:scale-105 hover:text-yellow-300"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="text-gray-500 transition-all hover:scale-105 hover:text-yellow-300"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
