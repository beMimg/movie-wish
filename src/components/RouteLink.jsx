import { IoIosHome } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaPuzzlePiece } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

export default function RouteLink({ open, setOpen, title, path }) {
  const activeLink =
    "flex items-center justify-center gap-2 p-4 pl-16 md:pl-0 md:text-yellow-300 text-xl text-white";
  const normalLink =
    "flex items-center text-base gap-2 pt-4 md:text-lg hover:text-yellow-100 transition-all pl-4";

  function getIcon(title) {
    if (title === "Home") {
      return <IoIosHome />;
    }
    if (title === "Categories") {
      return <TbCategoryFilled />;
    }
    if (title === "Wish list") {
      return <IoIosHeart />;
    }
    if (title === "About us") {
      return <FaPuzzlePiece />;
    }
    return "?";
  }

  let icon = getIcon(title);

  return (
    <NavLink
      to={path}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      {open ? (
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={() => setOpen(!open)}
        >
          {icon}
          <p>{title}</p>
        </div>
      ) : (
        <>
          {icon}
          <p>{title}</p>
        </>
      )}
    </NavLink>
  );
}
