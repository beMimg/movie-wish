import { NavLink } from "react-router-dom";

export default function NavegationLinks() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="popular">Popular</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </>
  );
}
