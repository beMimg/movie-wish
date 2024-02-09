import { NavLink } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaPuzzlePiece } from "react-icons/fa";

export default function NavegationLinks({ open, setOpen }) {
  const activeLink =
    "flex items-center justify-center gap-2 p-4 pl-16 md:pl-0 md:text-yellow-300 text-xl text-white";
  const normalLink =
    "flex items-center text-base gap-2 pt-4 md:text-lg hover:text-yellow-100 transition-all pl-4";

  function handleClick({ e, path, history }) {
    e.preventDefault();
  }

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <IoIosHome />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink
        to="categories"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <TbCategoryFilled />
          <p>Categories</p>
        </div>
      </NavLink>
      <NavLink
        to="wish_list"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <IoIosHeart />
          <p>Wish List</p>
        </div>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <FaPuzzlePiece />
          <p>About us</p>
        </div>
      </NavLink>
    </>
  );
}
