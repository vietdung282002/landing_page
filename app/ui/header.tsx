import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row justify-around items-center w-full">
      <Image src={"/logo.png"} alt="logo" width={144} height={36} />
    </div>
  );
}
