"use client";
import { playfairDisplay, openSans } from "../../fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import CustomScrollbar from "../../custom-scrollbar";

const testimonials = [
  {
    quote:
      "My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you.",
    author: "Leona Paul",
    title: "CEO of Floatcom",
    avatar: "/bedroom.jpg",
  },
  {
    quote:
      "The quality of furniture exceeded my expectations. The delivery was prompt and the assembly service was professional. Highly recommend!",
    author: "Sarah Johnson",
    title: "Interior Designer",
    avatar: "/bedroom.jpg",
  },
  {
    quote:
      "Outstanding customer support and beautiful products. The team helped me choose the perfect pieces for my living room. Will definitely come back!",
    author: "Michael Chen",
    title: "Architect at BuildCo",
    avatar: "/bedroom.jpg",
  },
  {
    quote:
      "From browsing to delivery, everything was seamless. The furniture quality is top-notch and the prices are very competitive.",
    author: "Emma Williams",
    title: "Home Stylist",
    avatar: "/bedroom.jpg",
  },
  {
    quote:
      "I've furnished my entire office with their products. Professional service, durable furniture, and great after-sales support.",
    author: "David Brown",
    title: "Startup Founder",
    avatar: "/bedroom.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxIndex = testimonials.length - 1;

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className={`${openSans.className} bg-secondary-500 py-25`}>
      <div className="mb-16 flex flex-col items-center px-6">
        <h2
          className={`${playfairDisplay.className} text-primary-200 mb-4 text-4xl font-bold sm:text-5xl`}
        >
          Testimonials
        </h2>
        <p className="text-lg text-gray-800">Over 15,000 happy customers.</p>
      </div>

      <div className="relative px-4 2xl:px-37">
        <div className="flex items-center">
          <div
            ref={containerRef}
            className="flex-1 overflow-hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex w-full shrink-0 flex-col items-center gap-8 sm:flex-row sm:items-start"
                >
                  <div className="h-[320px] w-full shrink-0 overflow-hidden rounded-3xl bg-gray-100 sm:h-[410px] sm:w-[421px]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1 pt-4">
                    <p
                      className={`${playfairDisplay.className} text-primary-200 mb-8 text-lg leading-relaxed italic 2xl:text-3xl`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-primary-200 text-lg font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-primary-100 text-base">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="2xlflex hidden shrink-0 flex-col gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-secondary-200 text-primary-200 hover:bg-secondary-200/80 flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50"
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
              className="bg-secondary-100 text-primary-200 hover:bg-secondary-100/80 flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Next"
            >
              <Image
                src={"/down_arrow.svg"}
                alt={"right arrow"}
                width={40}
                height={40}
                className={"rotate-270"}
              />
            </button>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-8">
          <div className="flex-1">
            <CustomScrollbar
              containerRef={containerRef}
              trackHeight={300}
              itemCount={testimonials.length}
              direction="horizontal"
              hideButtons={true}
            />
          </div>

          <Link
            href="/s"
            className="hover:text-primary-200 flex items-center gap-2 text-sm whitespace-nowrap text-gray-800 transition-colors"
          >
            <span>See all review</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
