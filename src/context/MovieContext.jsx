import { createContext, useContext, useState, useMemo } from "react";

const ListProvider = createContext();

export function useWishList() {
  return useContext(ListProvider);
}

export default function ContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const value = useMemo(
    () => ({ wishList, setWishList }),
    [wishList, setWishList],
  );

  return (
    <ListProvider.Provider value={value}>{children}</ListProvider.Provider>
  );
}
