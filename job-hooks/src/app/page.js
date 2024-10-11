import Image from "next/image";
import { Carousel } from "antd";
import MainCard from "./components/MainCard";

export default function Home() {
  const mainCardContent = ["", "", ""];
  return (
    <div>
      <div>
        <Carousel dotPosition="bottom" autoplay>
          {mainCardContent.map(() => (
            <MainCard />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
