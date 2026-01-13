"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const categories = [
  { name: "Bedroom", href: "/" },
  { name: "Dining Room", href: "/categories/dining-room" },
  { name: "Meeting Room", href: "/categories/meeting-room" },
  { name: "Workspace", href: "/categories/workspace" },
  { name: "Living Room", href: "/categories/living-room" },
  { name: "Room Kitchen", href: "/categories/kitchen" },
  { name: "Living Space", href: "/categories/living-space" },
];

export default function CategoryList() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="hidden sm:flex 2xl:hidden mt-9 flex-col items-center">
      <div className="flex flex-row justify-center items-center gap-x-10 ">
        {categories.slice(0, 4).map((category) => (
          <div
            key={category.name}
            className={clsx(
              "border-b-3",
              isActive(category.href)
                ? "border-primary-200"
                : "border-transparent"
            )}
          >
            <div className="text-primary-200 text-lg font-normal leading-6 whitespace-nowrap">
              {category.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-x-10 mt-5">
        {categories.slice(4, 7).map((category) => (
          <div
            key={category.name}
            className={clsx(
              "border-b-3",
              isActive(category.href)
                ? "border-primary-200"
                : "border-transparent"
            )}
          >
            <div className="text-primary-200 text-lg font-normal leading-6 whitespace-nowrap">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
