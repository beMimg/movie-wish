import NavegationLinks from "./NavegationLinks";
import { IoIosClose } from "react-icons/io";

export default function Menu({ open, setOpen }) {
  return (
    <div className="absolute left-0 top-0 z-30 h-screen w-full  bg-black bg-opacity-40 md:hidden">
      <div className="flex h-full w-2/3 flex-col gap-4 bg-black p-8">
        <IoIosClose onClick={() => setOpen(!open)} />
        <NavegationLinks></NavegationLinks>
      </div>
    </div>
  );
}
