import { createContext, useContext, useState, useMemo } from "react";

const ListProvider = createContext();

export function useWishList() {
  return useContext(ListProvider);
}

const AddMovieFunctionality = createContext();

export function useAddMovieToWishList() {
  return useContext(AddMovieFunctionality);
}
export default function ContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  console.log(wishList);
  function addMovieToWishList(name, id, poster_path) {
    setWishList((prevList) => {
      return [...prevList, { name: name, id: id, poster: poster_path }];
    });
  }

  const value = useMemo(
    () => ({ wishList, setWishList }),
    [wishList, setWishList],
  );

  return (
    <ListProvider.Provider value={value}>
      <AddMovieFunctionality.Provider value={addMovieToWishList}>
        {children}
      </AddMovieFunctionality.Provider>
    </ListProvider.Provider>
  );
}
