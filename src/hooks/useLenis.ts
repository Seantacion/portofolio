// hooks/useLenis.ts
export function useLenis() {
  const scrollTo = (target: string | number) => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(target, { duration: 2.5 });
    }
  };

  return { scrollTo };
}