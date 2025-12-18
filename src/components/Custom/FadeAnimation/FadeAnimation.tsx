import React, { useState, useEffect, useRef } from 'react';
import './animation.css'; // Impor CSS dari folder styles

interface FadeAnimationProps {
  children: React.ReactNode;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Animasi dipicu saat 10% elemen terlihat
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Fallback jika IntersectionObserver tidak didukung
    if (!window.IntersectionObserver) {
      setIsVisible(true);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;