"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(selector: string) {
  useEffect(() => {
    const items = gsap.utils.toArray(selector);
    items.forEach((item) => {
      gsap.fromTo(
        item as Element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item as Element,
            start: "top 80%"
          }
        }
      );
    });
  }, [selector]);
}
