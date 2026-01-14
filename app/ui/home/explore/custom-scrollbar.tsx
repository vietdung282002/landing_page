"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CustomScrollbarProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  trackHeight: number;
  itemCount: number;
  emptyDivHeight?: number;
  gap?: number;
}

export default function CustomScrollbar({
  containerRef,
  trackHeight,
  itemCount,
  emptyDivHeight = 104,
  gap = 7,
}: CustomScrollbarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const updateScrollPosition = () => {
    if (isDragging || !containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setScrollHeight(scrollHeight);
    setClientHeight(clientHeight);
    const maxScroll = scrollHeight - clientHeight;
    setScrollPosition(maxScroll > 0 ? scrollTop / maxScroll : 0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updateScrollPosition);
    updateScrollPosition();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollbarRef.current || !containerRef.current) return;

    setIsDragging(true);
    const trackRect = scrollbarRef.current.getBoundingClientRect();
    const thumbHeight =
      scrollHeight <= clientHeight
        ? trackHeight
        : Math.max(50, trackHeight / itemCount);
    const currentThumbTop = scrollPosition * (trackHeight - thumbHeight);

    const mouseYInTrack = e.clientY - trackRect.top;
    setDragStart(mouseYInTrack - currentThumbTop);

    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isDragging ||
        !scrollbarRef.current ||
        !containerRef.current ||
        !thumbRef.current
      )
        return;

      const trackRect = scrollbarRef.current.getBoundingClientRect();
      const trackHeight = trackRect.height;
      const thumbHeight = thumbRef.current.offsetHeight;
      const maxThumbTop = trackHeight - thumbHeight;

      if (maxThumbTop <= 0) return;

      let newThumbTop = e.clientY - trackRect.top - dragStart;
      newThumbTop = Math.max(0, Math.min(newThumbTop, maxThumbTop));

      const newScrollPosition = newThumbTop / maxThumbTop;
      const { scrollHeight, clientHeight } = containerRef.current;
      const maxScroll = scrollHeight - clientHeight;

      const newScrollTop = newScrollPosition * maxScroll;
      containerRef.current.scrollTop = newScrollTop;
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
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientHeight * 0.2;
    containerRef.current.scrollBy({
      top: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientHeight * 0.2;
    containerRef.current.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  const thumbHeight =
    scrollHeight <= clientHeight
      ? trackHeight
      : Math.max(50, trackHeight / itemCount);
  const thumbTop = scrollPosition * (trackHeight - thumbHeight);

  return (
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
      <div className="h-26 flex flex-col justify-between">
        <button
          type="button"
          className="cursor-pointer"
          onClick={handleScrollUp}
        >
          <Image src={"/up_arrow.svg"} alt="up arrow" width={40} height={40} />
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
  );
}
