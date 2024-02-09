import { IoIosHeart } from "react-icons/io";
import { IoIosHeartDislike } from "react-icons/io";

export default function handleWishListBtn({ handleClick, title }) {
  function getIcon() {
    if (title === "Wish List") return <IoIosHeart />;

    if (title === "Remove from List") return <IoIosHeartDislike />;
  }

  let icon = getIcon(title);

  return (
    <button
      onClick={() => handleClick()}
      className="flex flex-row items-center justify-center gap-2 rounded border-2 border-yellow-300  bg-yellow-300  p-2 px-4 font-bold text-black transition-all hover:border-yellow-300 hover:bg-black hover:text-yellow-300"
    >
      {icon}
      <p>{title}</p>
    </button>
  );
}
