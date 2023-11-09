"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillsIcon from "@/assets/icons/skills.js"
gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    var tl = gsap.timeline();
    tl.fromTo(head.current, {
      y: -400,
    }, {
      y: 50,
    },"a")
    .fromTo([wrap.current.children[0],wrap.current.children[7]], {
      y: 600,
    },{
      y: 0 ,
    },"a")
    .fromTo([wrap.current.children[1],wrap.current.children[6]], {
      y: 1000,
    },{
      y: 0,
    },"a")
    .fromTo([wrap.current.children[2],wrap.current.children[5]], {
      y: 600,
    },{
      y: 0,
    },"a")
    .fromTo([wrap.current.children[3],wrap.current.children[4]], {
      y: 300,
    },{
      y: 0,
    },"a")
    ;

    ScrollTrigger.create({
      trigger: cont.current,
      start: "top 60%",
      end: "bottom bottom",
      animation: tl,
      scrub:1
    });
  }, []);

  return (
    <div ref={cont} id="Skills" className={styles.container}>
      <div className={styles.blobS}></div>
      <div ref={head} className={styles.heading}>
        <h1>Skills <span>.</span></h1>
        <div className={styles.btnwrap}>
        <p className={styles.btnText}>Design</p>
        <p className={styles.btnText}>Code</p>
        <p className={styles.btnText}>Tool</p>
        </div>
      </div>
      <div ref={wrap} className={styles.wrapper}>

         <IconCol list={["ai","figma","ps"]}/>
         <IconCol list={["html","css","js","scss"]}/>
         <IconCol list={["tailwind","gsap","framer"]}/>
         <IconCol list={["react","next"]}/>

         <IconCol list={["postman","bootstrap"]}/>
         <IconCol list={["vscode","github","git"]}/>
         <IconCol list={["vs","sql","mvc","chash"]}/>
         <IconCol list={["cpp","python","java"]}/>

      </div>
    </div>
  );
}
