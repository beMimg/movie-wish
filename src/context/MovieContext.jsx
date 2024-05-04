import { createContext, useContext, useState, useMemo } from "react";

const ListProvider = createContext();

export function useWishList() {
  return useContext(ListProvider);
}

const HandleWishListBtns = createContext();

export function useHandleWishListBtns() {
  return useContext(HandleWishListBtns);
}

export default function ContextProvider({ children }) {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || [],
  );

  function addMovieToWishList(name, id, poster_path) {
    const movie = { title: name, id: id, poster_path: poster_path };

    if (!wishList) {
      let moviesList = [movie];
      localStorage.setItem("wishList", JSON.stringify(moviesList));
      setWishList(movie);
    } else {
      const newMoviesList = wishList.concat(movie);
      localStorage.setItem("wishList", JSON.stringify(newMoviesList));
      setWishList(newMoviesList);
    }
  }

  function removeMovieFromWishList(id) {
    const updatedList = wishList.filter((movie) => movie.id !== id);
    localStorage.setItem("wishList", JSON.stringify(updatedList));
    setWishList(updatedList);
  }

  const handleBtns = { addMovieToWishList, removeMovieFromWishList };

  const value = useMemo(
    () => ({ wishList, setWishList }),
    [wishList, setWishList],
  );

  return (
    <ListProvider.Provider value={value}>
      <HandleWishListBtns.Provider value={handleBtns}>
        {children}
      </HandleWishListBtns.Provider>
    </ListProvider.Provider>
  );
}
