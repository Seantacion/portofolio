// components/ImageLightbox/index.tsx

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import type { ProjectImage } from "@/types/project.types";

interface ImageLightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <IoClose size={32} />
      </button>

      {/* Image Counter */}
      {hasMultipleImages && (
        <div className="absolute top-4 left-4 text-white text-sm font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Previous Button */}
      {hasMultipleImages && currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full hover:bg-black/70"
          aria-label="Previous image"
        >
          <MdNavigateBefore size={32} />
        </button>
      )}

      {/* Next Button */}
      {hasMultipleImages && currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full hover:bg-black/70"
          aria-label="Next image"
        >
          <MdNavigateNext size={32} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.img}
          alt={`Preview ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Thumbnail Navigation (Optional) */}
      {hasMultipleImages && images.length <= 10 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={(e) => {
                e.stopPropagation();
                // You'll need to add onGoTo function to props
                // For now, we can just close and it will work with navigation
              }}
              className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-white scale-110"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={image.img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}