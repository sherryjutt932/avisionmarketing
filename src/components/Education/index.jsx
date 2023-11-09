"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Degree(props) {
  return (
    <div className={styles.Degree}>
      <div className={styles.year}></div>
      <div className={styles.title}>
<div>
          &#x2022;
          <span>{props.data.title}</span>
          </div>
      </div>
    </div>
  );
}

export default function Education(props) {
  const cont = useRef();
  const wrap = useRef();
  
  const Degrees = [
    {
      title: "Social Media Marketing",
    },
    {
      title: "Website Development",
    },
    {
      title: "UI/UX Designing",
    },
    {
      title: "Branding"
    },
    {
      title: "App Development",
    },
    {
      title:  "Content Creation" ,
    },
  ];

  useEffect(() => {
    gsap.set(wrap.current.children, { x: 400, opacity:0, });

    var tl = gsap.timeline();
    tl.to(wrap.current.children, {
      x: 0,
      opacity:1,
      duration:1,
      stagger: .3,
      ease: "ease", // Easing function (you can choose a different one)
    });

    ScrollTrigger.create({
      trigger: cont.current,
      start: "top 50%",
      end: "bottom 50%",
      animation: tl,
      scrub: true,
    });
  }, []);

  return (
    <div ref={cont} id="Education" className={styles.container}>
      <div className={styles.heading}>
        <h1>Services <span>.</span></h1>
        <p className={styles.btnText}>We can provide</p>
      </div>
      <div ref={wrap} className={styles.wrapper}>
        {Degrees.map((item, i) => (
          <Degree key={i} data={item} />
        ))}
      </div>
    </div>
  );
}
