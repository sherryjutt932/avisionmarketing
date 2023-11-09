"use client";
import {useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon";
gsap.registerPlugin(ScrollTrigger);


export default function Marque(props) {
  const wrap = useRef();
  useEffect(() => {
    gsap.set(wrap.current, { x: 1200 });

    var tl = gsap.timeline();
    tl.fromTo(wrap.current, {
      x: 1200,
      ease: "ease", // Easing function (you can choose a different one)
    },{
      x: -1200,
      ease: "ease", // Easing function (you can choose a different one)
    });

    ScrollTrigger.create({
      trigger: wrap.current,
      start: "top bottom",
      end: "bottom+=2000",
      animation: tl,
      scrub: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={wrap} className={styles.wrapper}>
        {[...Array(12)].map((_, i) => (
          <span key={i}>
            <p>{props.text}</p>
            <Icon wrp={wrap}/>
          </span>
        ))}
      </div>
    </div>
  );
}
