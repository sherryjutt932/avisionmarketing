
"use client";
import {useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { GiNinjaStar } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Icon(props) {
    const icon = useRef();
  
    useEffect(() => {
      gsap.set(icon.current, {rotation:0 });
  
      var tl = gsap.timeline();
      tl.to(icon.current, {
        rotation:360,
        ease: "ease", // Easing function (you can choose a different one)
      });
  
      ScrollTrigger.create({
        trigger: props.wrp.current,
        start: "top bottom",
        end: "bottom top",
        animation: tl,
        scrub: true,
      });
    }, []);
    return (
      <span ref={icon}>
                <GiNinjaStar />
              </span>
    )
  }