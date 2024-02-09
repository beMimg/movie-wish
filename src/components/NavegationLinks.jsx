import RouteLink from "./RouteLink";

export default function NavegationLinks({ open, setOpen }) {
  return (
    <>
      <RouteLink open={open} setOpen={setOpen} title={"Home"} path={"/"} />
      <RouteLink
        open={open}
        setOpen={setOpen}
        title={"Categories"}
        path="categories"
      />
      <RouteLink
        open={open}
        setOpen={setOpen}
        title={"Wish list"}
        path="wish_list"
      />
      <RouteLink
        open={open}
        setOpen={setOpen}
        title={"About us"}
        path="about_us"
      />
    </>
  );
}
