"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";
import LinkRow from "../LinkRow";
import Connection from "../Connection";
import EmailButton from "./EmailBtn";


export default function Footer(props) {
  const cont = useRef();
  const wrap = useRef();
  const navItems = [
    {
      name: "linkedIn",
      url: "https://www.instagram.com/avisionmarketing/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/avisionmarketing/",
    },
    {
      name: "Facebook",
      url: "https://www.instagram.com/avisionmarketing/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context((self) => {

      gsap.set("#blurr", { opacity:0, display:"none" });
      var tl = gsap.timeline();
      tl.fromTo(
        cont.current,
        {
          padding: "0rem 0rem",
          ease: "ease",
        },
        {
          padding: "4rem 4rem",
          ease: "ease",
        },
        "a"
      ).fromTo(
        wrap.current,
        {
          // backgroundColor: "#fff",
          borderRadius: "0",
          ease: "expo",
        },
        {
          // backgroundColor: "#000",
          borderRadius: "24px",
          ease: "expo",
        },
        "a"
      ).to(
        "#blurr",
        {
          opacity:1, display:"unset",
          ease: "expo",
        },
        "a"
      );

      ScrollTrigger.create({
        trigger: cont.current,
        start: "top 20%",
        end: "top 2%",
        animation: tl,
        scrub: 2,
      });
    }, cont); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  // useEffect(() => {
  //   // gsap.set(cont.current, {  padding: "0rem 0rem" });
  //   // gsap.set(wrap.current, { borderColor:"#000", borderRadius: "0px" });

  //   var tl = gsap.timeline();
  //   tl.from(
  //     cont.current,
  //     {
  //       padding: "0rem 0rem",
  //       ease: "ease", // Easing function (you can choose a different one)
  //     },
  //     "a"
  //   ).from(
  //     wrap.current,
  //     {
  //       backgroundColor: "#000",
  //       borderRadius: "0",
  //       ease: "expo", // Easing function (you can choose a different one)
  //     },
  //     "a"
  //   );

  //   ScrollTrigger.create({
  //     trigger: cont.current,
  //     start: "top 20%",
  //     end: "top 2%",
  //     animation: tl,
  //     scrub: 5,
  //   });
  // }, []);

  return (
    <div ref={cont} id="Contact" className={styles.container}>
     
      <div ref={wrap} className={styles.wrapper}>
        <div className={styles.detail}>
        <p>Have a project in mind?</p>
        <h1>Let's connect</h1>
        <EmailButton/>
        </div>
        <Connection />
      </div>

      <div className={styles.bottomNav}>
        <p className={styles.name}>Avision Marketing</p>

        <div className={styles.SocialLinks}>
          <LinkRow data={navItems} />
        </div>
      </div>

    </div>
  );
}
