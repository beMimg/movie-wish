import { Link } from "react-router-dom";
import { useWishList } from "../context/MovieContext";

export default function WishList() {
  const { wishList, setWishList } = useWishList();

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
    </div>
  );
}
