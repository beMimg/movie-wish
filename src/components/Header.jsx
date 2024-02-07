import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Menu from "./Menu";
import NavegationLinks from "./NavegationLinks";
import { MdLocalMovies } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky  top-0 z-20 mx-auto flex w-full flex-wrap items-center justify-between bg-black p-8   text-white md:flex-nowrap">
      <IoIosMenu onClick={() => setOpen(!open)} className="md:hidden" />
      <h1 className="mb-2 flex flex-row items-center justify-center gap-3 md:mb-0">
        <MdLocalMovies />
        <h1 className="flex flex-row text-3xl font-extrabold">
          Cine <span className="text-yellow-300">Wish</span>
        </h1>
      </h1>
      <div className="hidden w-full justify-evenly text-white md:flex">
        <NavegationLinks />
      </div>
      <IoIosSearch />
      {open && <Menu setOpen={setOpen} open={open} />}
    </header>
  );
}
