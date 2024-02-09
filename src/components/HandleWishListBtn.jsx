import { IoIosHeart } from "react-icons/io";
import { IoIosHeartDislike } from "react-icons/io";

export default function handleWishListBtn({ handleClick, type }) {
  let title, icon, style;

  if (type === "add") {
    title = "Wish List";
    icon = <IoIosHeart />;
    style =
      "border-yellow-300 bg-yellow-300 hover:border-yellow-300 hover:bg-black hover:text-yellow-300";
  }
  if (type === "remove") {
    title = "Remove from list";
    icon = <IoIosHeartDislike />;
    style =
      "border-red-600 bg-red-600 hover:border-red-600 hover:bg-black hover:text-red-600";
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`${style} flex flex-row items-center justify-center gap-2 rounded border-2 p-2 px-4 transition-all hover:border-yellow-300 hover:bg-black `}
    >
      {icon}
      <p>{title}</p>
    </button>
  );
}
