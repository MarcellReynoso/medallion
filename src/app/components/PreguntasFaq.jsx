"use client";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

export default function PreguntasFaq({ text }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Detenemos después de activarse
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <TypeAnimation
          cursor={false}
          className={`letratitulo col-xl-6 col-10 mx-auto py-5 text-justify text-white text-4xl font-semibold ${CURSOR_CLASS_NAME}`}
          sequence={[
            text,
            1000,
            (el) => el.classList.remove(CURSOR_CLASS_NAME),
            6000,
          ]}
          repeat={Infinity}
          wrapper="div"
        />
      )}
    </div>
  );
}
