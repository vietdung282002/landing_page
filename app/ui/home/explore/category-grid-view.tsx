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
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 w-full mt-25 2xl:mt-0">
      {categories.map((category) => (
        <div
          key={category.name}
          className="group bg-gray-200 rounded-[10px] relative overflow-hidden cursor-pointer origin-center transition-transform duration-300 h-[201px] md:h-[277px] 2xl:h-[321px]"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gray-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 2xl:gap-9">
            <h3 className="text-[36px] md:text-[48px] 2xl:text-[64px] font-normal leading-21 text-white">
              {category.name}
            </h3>
            <button
              className={`${openSans.className} bg-secondary-200 text-primary-200 rounded-md font-normal text-lg leading-6 h-[53px] w-[150px] hover:bg-secondary-200 transition-colors duration-200`}
            >
              Explore
            </button>
          </div>
          <div className="block 2xl:hidden absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 2xl:gap-9">
            <h3 className="text-[36px] md:text-[48px] 2xl:text-[64px] font-normal leading-21 text-white">
              {category.name}
            </h3>
            <div className="h-[53px]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
