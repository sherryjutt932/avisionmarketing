"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function SingleLink({ data }) {
  const wrap = useRef();
  const L1 = useRef();
  const L2 = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.set(L1.current.children, { y: 0 });
    gsap.set(L2.current.children, { y: 20 });

    gsap.defaults({
      ease: "power2",
      duration: 0.3,
    });

    var animation = gsap.timeline({ paused: true });

    animation
      .fromTo(
        L1.current.children,
        {
          y: 0,
          stagger: 0.01,
        },
        {
          y: -20,
          stagger: 0.01,
        },
        "a"
      )
      .fromTo(
        L2.current.children,
        {
          y: 20,
          stagger: 0.01,
        },
        {
          y: 0,
          stagger: 0.01,
        },
        "a"
      );

    // ScrollTrigger.create({
    //   trigger: props.wrp.current,
    //   start: "top bottom",
    //   end: "bottom top",
    //   animation: tl,
    //   scrub: true,
    // });

    wrap.current.addEventListener("mouseenter", () => {
      if (!isHovered) {
        animation.play();
        setIsHovered(true);
      }
    });

    wrap.current.addEventListener("mouseleave", () => {
      animation.reverse();
      setIsHovered(false);
    });

    return () => {
      if (wrap.current) {
        // Clean up event listeners if the component unmounts
        wrap.current.removeEventListener("mouseenter", () => {});
        wrap.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, [isHovered]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(element);
    if (element) {
      gsap.to(window, {
        scrollTo: { y: `#${sectionId}`, autoKill: false },
        ease: "power2",
        duration: 1, // adjust the duration as needed
      });
    }
  };

  return (
    <div ref={wrap} className={styles.wrapper}>
      {data.url != "" ? (
        <>
          <a target="_blank" ref={L1} href={data.url}>
            {data.name.split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </a>
          <a target="_blank" ref={L2} href={data.url}>
            {data.name.split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </a>
        </>
      ) : (
        <>
          <a
            ref={L1}
            onClick={() => {
              scrollToSection(data.ref);
            }}
          >
            {data.name.split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </a>
          <a
            ref={L2}
            onClick={() => {
              scrollToSection(data.ref);
            }}
          >
            {data.name.split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </a>
        </>
      )}
    </div>
  );
}
