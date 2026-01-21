"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { playfairDisplay, openSans, roboto } from "../../fonts";

const roomItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Room ${i + 1}`,
  image: "/bedroom.jpg",
}));

export default function OurCreation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = roomItems.length;
  const maxIndex = totalItems - 1;

  const progress =
    maxIndex > 0 ? Math.min((currentIndex / maxIndex) * 100, 100) : 0;
  const translateX = currentIndex * (360 + 24);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-bg-primary overflow-hidden py-20 sm:py-25">
      <div className="flex items-center gap-6">
        <div className="bg-primary-100 hidden h-[503px] w-[400px] shrink-0 flex-col justify-start rounded-r-[10px] pr-25 pl-5 sm:flex 2xl:h-[503px] 2xl:w-[577px] 2xl:pl-37">
          <div className="pt-32">
            <h2
              className={`${playfairDisplay.className} text-3xl leading-tight font-medium text-white italic sm:text-4xl`}
            >
              Our
              <br />
              Own Creation
            </h2>
            <p className={`${openSans.className} mt-8 text-sm text-white/80`}>
              Designed in our studio
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span
              className={`${openSans.className} text-sm font-medium text-white`}
            >
              More
            </span>

            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/30">
              <div
                className="bg-primary-200 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-primary-200 hover:bg-primary-200/80 flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
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
              className="bg-secondary-100 text-primary-200 hover:bg-secondary-100/80 flex h-9 w-9 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="bg-primary-100 flex h-[311px] w-[195] shrink-0 flex-col justify-start gap-y-8 rounded-r-[10px] px-4 py-12.5 sm:hidden">
          <h2
            className={`${playfairDisplay.className} text-[28px] leading-tight font-medium text-white italic md:text-4xl`}
          >
            Our Own
            <br />
            Creation
          </h2>
          <p className={`${openSans.className} text-[18px] text-white/80`}>
            Designed in our studio
          </p>

          <span
            className={`${roboto.className} text-[18px] font-bold text-white`}
          >
            More
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div
            className="flex h-[537px] items-center gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {roomItems.map((room, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={room.id}
                  className={`group relative shrink-0 transition-all duration-500 ease-out ${
                    isActive
                      ? "h-[343px] w-[280px] scale-100 sm:h-[537px] sm:w-[382px]"
                      : "h-[370px] w-[300px] scale-100 sm:h-[507px] sm:w-[360px]"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-100">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </div>

                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href=""
                      className={`${openSans.className} inline-flex items-center rounded-[6px] border border-gray-200 bg-white px-6 py-3 text-sm font-medium whitespace-nowrap text-gray-800 transition-shadow hover:shadow-xl`}
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
