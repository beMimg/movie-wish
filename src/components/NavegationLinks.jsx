import { NavLink } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { IoIosInformation } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";

export default function NavegationLinks({ open, setOpen }) {
  const activeLink =
    "flex items-center justify-center gap-2 p-4 pl-16 md:pl-0 md:text-yellow-300 text-2xl text-white";
  const normalLink =
    "flex items-center text-base gap-2 pt-4 md:text-xl hover:text-yellow-100 transition-all pl-4";
  return (
    <>
      <NavLink
        to="/"
        onClick={() => setOpen(!open)}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <IoIosHome />
        Home
      </NavLink>
      <NavLink
        to="categories"
        onClick={() => setOpen(!open)}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <TbCategoryFilled /> Categories
      </NavLink>
      <NavLink
        to="wish_list"
        onClick={() => setOpen(!open)}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <IoIosHeart /> Wish list
      </NavLink>
      <NavLink
        to="about_us"
        onClick={() => setOpen(!open)}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <IoExtensionPuzzle />
        About us
      </NavLink>
    </>
  );
}
