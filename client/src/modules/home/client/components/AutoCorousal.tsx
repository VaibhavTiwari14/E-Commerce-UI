"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type CarouselProps = {
  images: string[];
  height?: string;
  interval?: number;
  autoPlay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  showControls?: boolean;
  showThumbnails?: boolean;
  className?: string;
};

const AutoCarousel: React.FC<CarouselProps> = ({
  images,
  height = "h-96",
  interval = 5000,
  autoPlay = true,
  showDots = true,
  showArrows = true,
  showControls = true,
  showThumbnails = false,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const length = images.length;

  const next = () => {
    setDirection("next");
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? "next" : "prev");
    setCurrent(index);
  };

  useEffect(() => {
    if (!isHovered && !isPaused && autoPlay) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, interval);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isHovered, isPaused, interval, autoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) next();
    if (touchStart - touchEnd < -75) prev();
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative w-full ${height} rounded-xl overflow-hidden shadow-2xl group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                idx === current
                  ? "opacity-100 scale-100"
                  : idx === (current - 1 + length) % length &&
                    direction === "prev"
                  ? "opacity-0 scale-95 -translate-x-full"
                  : idx === (current + 1) % length && direction === "next"
                  ? "opacity-0 scale-95 translate-x-full"
                  : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === current}
                loading={Math.abs(idx - current) <= 1 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {showArrows && (
          <>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Play / Pause */}
        {showControls && autoPlay && (
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg"
          >
            {isPaused ? (
              <Play className="w-4 h-4" />
            ) : (
              <Pause className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((current + 1) / length) * 100}%` }}
          />
        </div>
      </div>

      {/* Dots */}
      {showDots && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="group/dot relative"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  current === idx
                    ? "w-8 h-2 bg-gray-800"
                    : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="grid grid-cols-5 gap-2 mt-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 shadow-md ${
                current === idx
                  ? "scale-105 shadow-xl"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCarousel;
