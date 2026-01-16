import { openSans } from "../../fonts";
import Image from "next/image";
const socialLinks = [
  { name: "Facebook", href: "/", icon: "/facebook.svg" },
  { name: "Instagram", href: "/", icon: "/instagram.svg" },
  { name: "LinkedIn", href: "/", icon: "/linkedin.svg" },
  { name: "Dribble", href: "/", icon: "/dribble.svg" },
  { name: "Twitter", href: "/", icon: "/twitter.svg" },
];
export default function Footer() {
  return (
    <div
      className={`${openSans.className} text-primary-200 text-lg bg-gray-400 w-full h-[464px] pt-25 pb-9 px-37 flex flex-col justify-between items-start`}
    >
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start">
          <Image src="/small-logo.svg" alt="logo" width={137} height={36} />
          <div className="flex flex-row justify-start items-start gap-x-9 mt-5">
            {socialLinks.map((link) => (
              <Image
                key={link.name}
                src={link.icon}
                alt={link.name}
                width={30}
                height={30}
              />
            ))}
          </div>
          <div className="mt-5 font-bold">Address</div>
          <div className="mt-2">+123 654 987</div>
          <div className="mt-2">877 The Bronx, NY</div>
          <div className="mt-2">14568, USA</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-bold">My Account</div>
          <div className="mt-9">Sign in</div>
          <div className="mt-2">Register</div>
          <div className="mt-2">Order status</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-bold">Help</div>
          <div className="mt-9">Shipping</div>
          <div className="mt-2">Returns</div>
          <div className="mt-2">Sizing</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-bold">Shop</div>
          <div className="mt-9">All Products</div>
          <div className="mt-2">Bedroom</div>
          <div className="mt-2">Dinning Room</div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="font-bold">Legal Stuff</div>
          <div className="mt-9">Shipping & Delivery</div>
          <div className="mt-2">Terms & Conditions</div>
          <div className="mt-2">Privacy & Policy</div>
        </div>
      </div>
      <div>Copyright ©2020 INWOOD. All Rights Reserved</div>
    </div>
  );
}
