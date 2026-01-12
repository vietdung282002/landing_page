import Image from "next/image";

export default function HeaderAction() {
  return (
    <div className="flex flex-row justify-center gap-x-[12px] sm:gap-x-[58px]">
      <button type="button" className="cursor-pointer">
        <Image src={"/icon_search.svg"} alt="search" width={24} height={24} />
      </button>
      <button type="button" className="cursor-pointer">
        <Image src={"/icon_cart.svg"} alt="cart" width={24} height={24} />
      </button>
      <button type="button" className="cursor-pointer">
        <Image src={"/icon_user.svg"} alt="user" width={24} height={24} />
      </button>
    </div>
  );
}
