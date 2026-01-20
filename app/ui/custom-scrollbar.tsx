"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type ScrollDirection = "vertical" | "horizontal";

interface CustomScrollbarProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  trackHeight: number;
  itemCount: number;
  gap?: number;
  direction?: ScrollDirection;
  hideButtons?: boolean;
}

export default function CustomScrollbar({
  containerRef,
  trackHeight,
  itemCount,
  gap = 7,
  direction = "vertical",
  hideButtons = false,
}: CustomScrollbarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollSize, setScrollSize] = useState(0);
  const [clientSize, setClientSize] = useState(0);
  const [trackLength, setTrackLength] = useState(trackHeight);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const isVertical = direction === "vertical";

  const updateScrollPosition = useCallback(() => {
    if (isDragging || !containerRef.current) return;

    const container = containerRef.current;
    const scrollSizeValue = isVertical
      ? container.scrollHeight
      : container.scrollWidth;
    const clientSizeValue = isVertical
      ? container.clientHeight
      : container.clientWidth;
    const scrollPos = isVertical ? container.scrollTop : container.scrollLeft;

    setScrollSize(scrollSizeValue);
    setClientSize(clientSizeValue);

    const maxScroll = scrollSizeValue - clientSizeValue;
    setScrollPosition(maxScroll > 0 ? scrollPos / maxScroll : 0);
  }, [isDragging, isVertical, containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updateScrollPosition);
    updateScrollPosition();

    const updateTrackLength = () => {
      if (!scrollbarRef.current || !scrollbarContainerRef.current) return;
      if (isVertical) {
        setTrackLength(trackHeight);
      } else {
        setTrackLength(
          scrollbarContainerRef.current.offsetWidth || trackHeight
        );
      }
    };

    updateTrackLength();
    if (!isVertical) {
      window.addEventListener("resize", updateTrackLength);
    }

    return () => {
      container.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
      if (!isVertical) {
        window.removeEventListener("resize", updateTrackLength);
      }
    };
  }, [containerRef, isDragging, isVertical, trackHeight, updateScrollPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollbarRef.current || !containerRef.current) return;

    setIsDragging(true);
    const trackRect = scrollbarRef.current.getBoundingClientRect();

    const thumbSize =
      scrollSize <= clientSize
        ? trackLength
        : Math.max(50, trackLength / itemCount);
    const currentThumbPos = scrollPosition * (trackLength - thumbSize);

    const mousePosInTrack = isVertical
      ? e.clientY - trackRect.top
      : e.clientX - trackRect.left;
    setDragStart(mousePosInTrack - currentThumbPos);

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
      const trackLength = isVertical ? trackRect.height : trackRect.width;
      const thumbSize = isVertical
        ? thumbRef.current.offsetHeight
        : thumbRef.current.offsetWidth;
      const maxThumbPos = trackLength - thumbSize;

      if (maxThumbPos <= 0) return;

      const mousePosInTrack = isVertical
        ? e.clientY - trackRect.top
        : e.clientX - trackRect.left;

      let newThumbPos = mousePosInTrack - dragStart;
      newThumbPos = Math.max(0, Math.min(newThumbPos, maxThumbPos));

      const newScrollPosition = newThumbPos / maxThumbPos;
      const { scrollHeight, clientHeight, scrollWidth, clientWidth } =
        containerRef.current;
      const maxScroll = isVertical
        ? scrollHeight - clientHeight
        : scrollWidth - clientWidth;

      const newScrollPos = newScrollPosition * maxScroll;
      if (isVertical) {
        containerRef.current.scrollTop = newScrollPos;
      } else {
        containerRef.current.scrollLeft = newScrollPos;
      }
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
  }, [isDragging, dragStart, scrollPosition, containerRef, isVertical]);

  const handleScrollBackward = () => {
    if (!containerRef.current) return;
    const scrollAmount =
      (isVertical
        ? containerRef.current.clientHeight
        : containerRef.current.clientWidth) * 0.2;
    containerRef.current.scrollBy(
      isVertical
        ? { top: -scrollAmount, behavior: "smooth" }
        : { left: -scrollAmount, behavior: "smooth" }
    );
  };

  const handleScrollForward = () => {
    if (!containerRef.current) return;
    const scrollAmount =
      (isVertical
        ? containerRef.current.clientHeight
        : containerRef.current.clientWidth) * 0.2;
    containerRef.current.scrollBy(
      isVertical
        ? { top: scrollAmount, behavior: "smooth" }
        : { left: scrollAmount, behavior: "smooth" }
    );
  };

  const thumbSize =
    scrollSize <= clientSize
      ? trackLength
      : Math.max(50, trackLength / itemCount);
  const thumbPos = scrollPosition * (trackLength - thumbSize);

  return (
    <div
      ref={scrollbarContainerRef}
      className={
        isVertical
          ? "flex flex-col items-center justify-start"
          : "flex flex-col items-end w-full justify-center"
      }
      style={{ gap: `${gap}px` }}
    >
      <div
        className={
          isVertical ? "flex-1 flex items-center justify-end" : "flex w-full"
        }
      >
        <div
          ref={scrollbarRef}
          className={
            isVertical
              ? "relative w-px bg-primary-200"
              : "relative h-px bg-primary-200 w-full"
          }
          style={
            isVertical
              ? { width: "1px", height: `${trackLength}px` }
              : { height: "6px", width: `${trackLength}px` }
          }
        >
          <div
            ref={thumbRef}
            className={
              isVertical
                ? "absolute left-1/2 -translate-x-1/2 bg-primary-200 cursor-grab active:cursor-grabbing transition-colors hover:bg-primary-200"
                : "absolute top-1/2 -translate-y-1/2 bg-primary-100 cursor-grab active:cursor-grabbing transition-colors hover:bg-primary-200"
            }
            style={
              isVertical
                ? {
                  width: "5px",
                  height: `${thumbSize}px`,
                  top: `${thumbPos}px`,
                }
                : {
                  height: "12px",
                  width: `${thumbSize}px`,
                  left: `${thumbPos}px`,
                }
            }
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
      {!hideButtons && (
        <div
          className={
            isVertical
              ? "h-26 flex flex-col justify-between"
              : "w-26 hidden 2xl:flex flex-row justify-between"
          }
        >
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleScrollBackward}
          >
            <Image
              src={"/up_arrow.svg"}
              alt={isVertical ? "up arrow" : "left arrow"}
              width={40}
              height={40}
              className={isVertical ? "" : "rotate-270"}
            />
          </button>
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleScrollForward}
          >
            <Image
              src={"/down_arrow.svg"}
              alt={isVertical ? "down arrow" : "right arrow"}
              width={40}
              height={40}
              className={isVertical ? "" : "rotate-270"}
            />
          </button>
        </div>
      )}
    </div>
  );
}
