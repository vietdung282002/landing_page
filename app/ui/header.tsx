import Image from "next/image";
import Navbar from "./navbar";
import HeaderAction from "./header-action";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center w-full py-[26px] px-[16px] md:px-[20px] lg:px-[40px] 2xl:px-[150px] bg-bg-100">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={144}
        height={36}
        className="order-2 sm:order-1"
      />
      <div className="order-1 sm:order-2">
        <Navbar />
      </div>
      <div className="order-3">
        <HeaderAction />
      </div>
    </div>
  );
}
