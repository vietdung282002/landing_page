"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { playfairDisplay, openSans } from "../../fonts";

const roomItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Room ${i + 1}`,
  image: "/bedroom.jpg",
}));

export default function OurCreation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = roomItems.length;
  const maxIndex = totalItems - 1;

  const progress = maxIndex > 0 ? Math.min((currentIndex / maxIndex) * 100, 100) : 0;
  const translateX = currentIndex * (360 + 24);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-25 bg-bg-primary overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="shrink-0 w-[577px] h-[503px] bg-primary-100 rounded-r-[10px] pl-37 pr-25 flex flex-col justify-start">
          <div className="pt-32">
            <h2
              className={`${playfairDisplay.className} text-3xl md:text-4xl font-medium text-white leading-tight italic`}
            >
              Our
              <br />
              Own Creation
            </h2>
            <p
              className={`${openSans.className} text-white/80 text-sm mt-8`}
            >
              Designed in our studio
            </p>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <span
              className={`${openSans.className} text-white text-sm font-medium`}
            >
              More
            </span>

            <div className="flex-1 h-[2px] bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-200 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-9 h-9 rounded-full bg-primary-200 flex items-center justify-center text-white hover:bg-primary-200/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <Image
                src={"/up_arrow.svg"}
                alt={"left arrow"}
                width={40}
                height={40}
                className={"rotate-270"}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 rounded-full bg-secondary-100 flex items-center justify-center text-primary-200 hover:bg-secondary-100/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <Image
                src={"/down_arrow.svg"}
                alt={"left arrow"}
                width={40}
                height={40}
                className={"rotate-270"}
              />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex items-center gap-6 h-[537px] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {roomItems.map((room, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={room.id}
                  className={`shrink-0 relative group transition-all duration-500 ease-out ${isActive
                    ? "w-[382px] h-[537px] scale-100"
                    : "w-[360px] h-[507px] scale-100"
                    }`}
                >
                  <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href=""
                      className={`${openSans.className} inline-flex items-center px-6 py-3 bg-white text-sm rounded-[6px] font-medium text-gray-800 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap border border-gray-200`}
                    >
                      Explore All Rooms
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
