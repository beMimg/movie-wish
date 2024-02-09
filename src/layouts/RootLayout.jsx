import { Outlet } from "react-router-dom";
import { useWishList } from "../context/MovieContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className=" font-sans text-2xl">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
