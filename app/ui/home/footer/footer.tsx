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
      className={`${openSans.className} text-primary-200 flex h-fit w-full flex-col items-start justify-between bg-gray-400 px-10 pt-25 pb-9 text-lg 2xl:px-37`}
    >
      <div className="hidden h-fit w-full flex-row items-start justify-between lg:flex">
        <div className="flex flex-col items-start justify-start">
          <Image src="/small-logo.svg" alt="logo" width={137} height={36} />
          <div className="mt-5 flex flex-row items-start justify-start gap-x-9">
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
        <div className="flex flex-col items-start justify-start">
          <div className="font-bold">My Account</div>
          <div className="mt-9">Sign in</div>
          <div className="mt-2">Register</div>
          <div className="mt-2">Order status</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="font-bold">Help</div>
          <div className="mt-9">Shipping</div>
          <div className="mt-2">Returns</div>
          <div className="mt-2">Sizing</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="font-bold">Shop</div>
          <div className="mt-9">All Products</div>
          <div className="mt-2">Bedroom</div>
          <div className="mt-2">Dinning Room</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="font-bold">Legal Stuff</div>
          <div className="mt-9">Shipping & Delivery</div>
          <div className="mt-2">Terms & Conditions</div>
          <div className="mt-2">Privacy & Policy</div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-row flex-wrap items-start justify-between lg:hidden">
        <div className="flex flex-col items-start justify-start">
          <Image src="/small-logo.svg" alt="logo" width={137} height={36} />
          <div className="mt-5 flex flex-row items-start justify-start gap-x-9">
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
        <div className="flex w-full flex-row items-start justify-between pt-25">
          <div className="flex flex-1 flex-col items-start justify-start">
            <div className="font-bold">My Account</div>
            <div className="mt-9">Sign in</div>
            <div className="mt-2">Register</div>
            <div className="mt-2">Order status</div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start">
            <div className="font-bold">Help</div>
            <div className="mt-9">Shipping</div>
            <div className="mt-2">Returns</div>
            <div className="mt-2">Sizing</div>
          </div>
        </div>
        <div className="flex w-full flex-row items-start justify-between pt-25">
          <div className="flex flex-1 flex-col items-start justify-start">
            <div className="font-bold">Shop</div>
            <div className="mt-9">All Products</div>
            <div className="mt-2">Bedroom</div>
            <div className="mt-2">Dinning Room</div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start">
            <div className="font-bold">Legal Stuff</div>
            <div className="mt-9">Shipping & Delivery</div>
            <div className="mt-2">Terms & Conditions</div>
            <div className="mt-2">Privacy & Policy</div>
          </div>
        </div>
      </div>
      <div className="mt-25">Copyright ©2020 INWOOD. All Rights Reserved</div>
    </div>
  );
}
