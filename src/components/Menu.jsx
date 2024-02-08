import NavegationLinks from "./NavegationLinks";
import { IoIosClose } from "react-icons/io";

export default function Menu({ open, setOpen }) {
  return (
    <div className="absolute left-0 top-0 z-30 h-screen w-full bg-black bg-opacity-40  md:hidden">
      <div className="p- relative flex h-full w-2/4 flex-col gap-4 bg-black">
        <IoIosClose
          onClick={() => setOpen(!open)}
          className="grid self-end text-6xl"
        />
        <NavegationLinks setOpen={setOpen} open={open}></NavegationLinks>
      </div>
    </div>
  );
}
