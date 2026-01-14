"use client";
import { useRef } from "react";
import { openSans } from "../../fonts";
import Image from "next/image";

const popularProducts = [
  {
    name: "Armchair",
    href: "/products/product-1",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Premium Sofa",
    href: "/products/product-2",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Minimal Sofa",
    href: "/products/product-3",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Dining Chair",
    href: "/products/product-4",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair1",
    href: "/products/product-5",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair2",
    href: "/products/product-6",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair3",
    href: "/products/product-7",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair4",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair5",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair6",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
  {
    name: "Armchair7",
    href: "/products/product-8",
    image: "/armchair.png",
    subtitle: "Light single chair ",
  },
];

export default function PopularScrollView() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col w-full py-13">
      <div
        className={`${openSans.className} flex flex-row gap-x-8 pl-49 overflow-x-auto `}
      >
        {popularProducts.map((product) => (
          <div
            key={product.name}
            className="flex flex-col justify-center items-center px-10 h-[585px] w-[430px] bg-secondary-200"
          >
            <div className="relative w-[275px] h-[350px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-2xl font-bold">{product.name}</div>
            <div className="text-lg">{product.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
