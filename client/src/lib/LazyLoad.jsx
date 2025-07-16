import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, ...props }) {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target); // stop observing once it's loaded
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      data-src={src}
      alt={alt}
      {...props}
    />
  );
}
