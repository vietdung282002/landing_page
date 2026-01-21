import Image from "next/image";
import { openSans } from "../../fonts";
const categories = [
  { name: "Bedroom", href: "/categories/bedroom", image: "/bedroom.jpg" },
  {
    name: "Dining Room",
    href: "/categories/dining-room",
    image: "/bedroom.jpg",
  },
  {
    name: "Meeting Room",
    href: "/categories/meeting-room",
    image: "/bedroom.jpg",
  },
  { name: "Workspace", href: "/categories/workspace", image: "/bedroom.jpg" },
  {
    name: "Living Room",
    href: "/categories/living-room",
    image: "/bedroom.jpg",
  },
  {
    name: "Kitchen Room",
    href: "/categories/kitchen-room",
    image: "/bedroom.jpg",
  },
];

export default function CategoryGridView() {
  return (
    <div className="mt-25 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-3 2xl:mt-0">
      {categories.map((category) => (
        <div
          key={category.name}
          className="group relative h-[201px] origin-center cursor-pointer overflow-hidden rounded-[10px] bg-gray-200 transition-transform duration-300 md:h-[277px] 2xl:h-[321px]"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gray-300/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 2xl:gap-9">
            <h3 className="text-[36px] leading-21 font-normal text-white md:text-[48px] 2xl:text-[64px]">
              {category.name}
            </h3>
            <button
              className={`${openSans.className} bg-secondary-200 text-primary-200 hover:bg-secondary-200 h-[53px] w-[150px] rounded-md text-lg leading-6 font-normal transition-colors duration-200`}
            >
              Explore
            </button>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-100 transition-opacity duration-300 group-hover:opacity-0 2xl:hidden 2xl:gap-9">
            <h3 className="text-[36px] leading-21 font-normal text-white md:text-[48px] 2xl:text-[64px]">
              {category.name}
            </h3>
            <div className="h-[53px]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
