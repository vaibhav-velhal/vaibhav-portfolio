import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

function ScrollReveal({
  as: Element = "div",
  className = "",
  children,
  delay = 0,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Element>
  );
}

export default ScrollReveal;