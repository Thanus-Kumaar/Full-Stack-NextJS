import Image from "next/image";

export default function MainCard() {
  return (
    <div className="relative h-[60vh] flex bg-blue-400">
      <Image src={"/photo1"} fill />
      <div className="absolute text-lg font-semibold">Some TEXT to display</div>
    </div>
  );
}
