// components/SmoothScrollProvider.tsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }:any) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    // EXPOSE KE WINDOW - ini yang kurang
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      if (typeof window !== 'undefined') {
        (window as any).lenis = null;
      }
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}