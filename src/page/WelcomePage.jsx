import { useEffect, useRef, useState } from "react";
import Carousel from "../components/Caroussel";
import Section from "../components/Section";
import { API_INFO } from "../API_INFO";

export default function WelcomePage() {
  const forYouRef = useRef();
  useEffect(() => {
    forYouRef.current.focus();
  }, []);

  return (
    <div className="bg-black p-6 text-white">
      <button ref={forYouRef} className=" w-fit rounded-3xl bg-gray-400 p-2 ">
        For You
      </button>
      <Carousel />
      {API_INFO.map((category) => (
        <Section
          title={category.title}
          url={category.url}
          key={category.id}
        ></Section>
      ))}
    </div>
  );
}
