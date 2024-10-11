import Image from "next/image";
import { Carousel } from "antd";

import MainCard from "./components/MainCard";
import MainBottom from "./components/MainBottom";

export default function Home() {
  const mainCardContent = [
    {
      content: "Get your dream job now. Start using our application",
      src: "/photo1.jpg",
    },
    {
      content: "Become great in your career by choosing us.",
      src: "/photo2.jpg",
    },
    {
      content: "Land on the internship that you wanted the most",
      src: "/photo3.png",
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <Carousel dotPosition="bottom" autoplay>
          {mainCardContent.map((card) => (
            <MainCard content={card.content} src={card.src} />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-row justify-center mt-20 gap-10">
          <MainBottom />
          <button className="bg-blue-500 p-4 rounded-md font-semibold hover:scale-[102%] transition duration-150">Become a user now, get a free suggestion from our job picker</button>
      </div>
    </div>
  );
}
