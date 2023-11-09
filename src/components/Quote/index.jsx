"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillsIcon from "@/assets/icons/skills.js"
gsap.registerPlugin(ScrollTrigger);

import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

function IconCol(props) {
  return (
    <div className={styles.iconCol}>
    {
      props.list.map((iconName, index) => (
        <div key={index} className={styles.icon}>
          {SkillsIcon[iconName] && SkillsIcon[iconName]()}
        </div>
      ))
    }
   </div>
  );
}

export default function Skills() {
  const cont = useRef();
  const wrap = useRef();
  const head = useRef();

//   useEffect(() => {
//     gsap.defaults({ ease: "power3" });
//     var tl = gsap.timeline();
//     tl.fromTo(head.current, {
//       y: -400,
//     }, {
//       y: 50,
//     },"a")
//     ;

//     ScrollTrigger.create({
//       trigger: cont.current,
//       start: "top bottom",
//       end: "bottom center",
//       animation: tl,
//       scrub: true,
//     });
//   }, []);

  return (
    <div ref={cont} className={styles.container}>
      <div className={styles.lines}>
        <hr data-pos="top" />
        <hr data-pos="bottom" />

        <div className={styles.vl} data-pos="left"></div>
        <div className={styles.vl} data-pos="right"></div>
      </div>
      <div ref={wrap} className={styles.wrapper}>

        <h1>
        <BiSolidQuoteLeft data-pos="left"/>
        Seamless Solutions, Striking Success. Navigating Your Business to New Heights 
       <BiSolidQuoteRight data-pos="right"/>
        </h1>

      </div>
    </div>
  );
}
