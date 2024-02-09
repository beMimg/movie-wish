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
  const [wishList, setWishList] = useState([]);

  console.log(wishList);

  function addMovieToWishList(name, id, poster_path) {
    setWishList((prevList) => {
      return [...prevList, { title: name, id: id, poster_path: poster_path }];
    });
  }

  function removeMovieFromWishList(id) {
    const updatedList = wishList.filter((movie) => movie.id !== id);
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
