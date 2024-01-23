import { useEffect, useState, useRef, RefObject } from 'react';

function useObserver(ref: RefObject<HTMLElement>, start: boolean): boolean {
  const observer = useRef<IntersectionObserver | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (!start) {
      return;
    }
    observer.current = new IntersectionObserver(([entries]) =>
      setInView(entries.isIntersecting)
    );
    observer.current.observe(ref.current as HTMLElement);
  }, [start]);

  return inView;
}

export default useObserver;
