import Image from "next/image";

export default function MainCard({content, src}) {
  return (
    <div className="h-[60vh] flex bg-blue-400">
      <div className="text-[30px] font-semibold mx-auto w-fit mt-40">{content}</div>
    </div>
  );
}
