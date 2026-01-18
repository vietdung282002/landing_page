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
    <section className={`${openSans.className} py-25 bg-secondary-500`}>
      <div className="flex flex-col items-center px-6 mb-16">
        <h2
          className={`${playfairDisplay.className} text-4xl sm:text-5xl font-bold text-primary-200 mb-4`}
        >
          Testimonials
        </h2>
        <p className="text-lg text-gray-800">Over 15,000 happy customers.</p>
      </div>

      <div className="relative px-37">
        <div className="flex items-center">
          <div
            ref={containerRef}
            className="flex-1 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="w-[280px] h-[320px] shrink-0 rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={280}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 pt-4">
                    <p
                      className={`${playfairDisplay.className} text-2xl md:text-3xl text-primary-200 leading-relaxed mb-8 italic`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-lg font-semibold text-primary-200">
                        {testimonial.author}
                      </p>
                      <p className="text-base text-primary-100">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-secondary-200 flex items-center justify-center text-primary-200 hover:bg-secondary-200/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-primary-200 hover:bg-secondary-100/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="flex items-center gap-2 text-sm text-gray-800 hover:text-primary-200 transition-colors whitespace-nowrap"
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
