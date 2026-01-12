"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const categories = [
  { name: "Bedroom", href: "/categories/bedroom" },
  { name: "Dining Room", href: "/categories/dining-room" },
  { name: "Meeting Room", href: "/categories/meeting-room" },
  { name: "Workspace", href: "/categories/workspace" },
  { name: "Living Room", href: "/categories/living-room" },
  { name: "Kitchen", href: "/categories/kitchen" },
  { name: "Living Space", href: "/categories/living-space" },
  { name: "Bathroom", href: "/categories/bathroom" },
  { name: "Home Office", href: "/categories/home-office" },
  { name: "Outdoor", href: "/categories/outdoor" },
  { name: "Kids Room", href: "/categories/kids-room" },
  { name: "Storage", href: "/categories/storage" },
  { name: "Lighting", href: "/categories/lighting" },
  { name: "Decor", href: "/categories/decor" },
];

export default function ScrollView() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const updateScrollPosition = () => {
    if (isDragging) return;

    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const maxScroll = scrollHeight - clientHeight;
      setScrollPosition(maxScroll > 0 ? scrollTop / maxScroll : 0);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updateScrollPosition);
    updateScrollPosition();

    return () => {
      container.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollbarRef.current || !scrollContainerRef.current) return;

    setIsDragging(true);
    const trackRect = scrollbarRef.current.getBoundingClientRect();
    const trackHeight = 583;
    const thumbHeight = Math.max(50, trackHeight / categories.length);
    const currentThumbTop = scrollPosition * (trackHeight - thumbHeight);

    const mouseYInTrack = e.clientY - trackRect.top;
    setDragStart(mouseYInTrack - currentThumbTop);
    setScrollStart(scrollPosition);

    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isDragging ||
        !scrollbarRef.current ||
        !scrollContainerRef.current ||
        !thumbRef.current
      )
        return;

      const trackRect = scrollbarRef.current.getBoundingClientRect();
      const trackHeight = trackRect.height;
      const thumbHeight = thumbRef.current.offsetHeight;
      const maxThumbTop = trackHeight - thumbHeight;

      let newThumbTop = e.clientY - trackRect.top - dragStart;
      newThumbTop = Math.max(0, Math.min(newThumbTop, maxThumbTop));

      const newScrollPosition = newThumbTop / maxThumbTop;
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const maxScroll = scrollHeight - clientHeight;

      const newScrollTop = newScrollPosition * maxScroll;
      scrollContainerRef.current.scrollTop = newScrollTop;
      setScrollPosition(newScrollPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, scrollPosition]);

  const handleScrollUp = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientHeight * 0.2;
    scrollContainerRef.current.scrollBy({
      top: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientHeight * 0.2;
    scrollContainerRef.current.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const containerHeight = 694;
  const emptyDivHeight = 104;
  const gap = 7;
  const trackHeight = containerHeight - emptyDivHeight - gap;
  const thumbHeight = Math.max(50, trackHeight / categories.length);
  const thumbTop = scrollPosition * (trackHeight - thumbHeight);

  return (
    <div className="flex flex-row justify-between mt-[80px] w-full h-[694px] relative">
      <div
        ref={scrollContainerRef}
        className="flex flex-col gap-y-[83px] pl-[25px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ height: `${containerHeight}px` }}
      >
        {categories.map((category) => (
          <div key={category.name}>{category.name}</div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-y-[7px] h-full">
        <div className="flex-1 flex items-center justify-end">
          <div
            ref={scrollbarRef}
            className="relative w-[1px] bg-primary-200"
            style={{ width: "1px", height: `${trackHeight}px` }}
          >
            <div
              ref={thumbRef}
              className="absolute left-1/2 -translate-x-1/2 bg-primary-200 cursor-grab active:cursor-grabbing transition-colors hover:bg-primary-200"
              style={{
                width: "5px",
                height: `${thumbHeight}px`,
                top: `${thumbTop}px`,
              }}
              onMouseDown={handleMouseDown}
            />
          </div>
        </div>
        <div className="h-[104px] flex flex-col justify-between">
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleScrollUp}
          >
            <Image
              src={"/up_arrow.svg"}
              alt="up arrow"
              width={40}
              height={40}
            />
          </button>
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleScrollDown}
          >
            <Image
              src={"/down_arrow.svg"}
              alt="down arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
