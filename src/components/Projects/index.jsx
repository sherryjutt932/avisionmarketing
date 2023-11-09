import { React, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import { photoAnm, detailAnm } from "./animation.js";
import Detail from "./Detail.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const gallery = useRef(null);
  const left = useRef(null);
  const details = useRef(null);
  const right = useRef(null);
  const photo = useRef(null);

  useLayoutEffect(() => {

    ScrollTrigger.create({
      trigger: gallery.current,
      start: "top top",
      end: "bottom bottom",
      pin: right.current,
      animation: photoAnm(photo),
      scrub: true,
    });
    
    // ScrollTrigger.create({
    //   trigger: left.current,
    //   start: "top top",
    //   end: "bottom bottom",
    //   pin: left.current,
    //   animation: detailAnm(details),
    //   scrub: true,
    // });

  }, []);

  
  const projects = [
    {
      title: "Forensic Analysis",
      description: "Create frontend and ML model to show result of Forensic Analysis with great accuracy.",
      year: "2023",
      tasks: ["API fetching","ML Model","Live prediction", "Authentication"],
      skills: ["html","css","js","react","python"]
    },
    {
      title: "Account Management System",
      description: "Developed and Design Detailed Account Management System for Global Soft ERP which include Ledgers, Reports, Accounts and much more.",
      year: "2023",
      tasks: ["Account Management","All Reports","Transaction Records", "Stock Management"],
      skills: ["html","css","js","mvc","sql"]
    },
    {
      title: "Mockytails",
      description: "A playfull and rich in color e-commerce website to sell mocktail cards having childrens as target audience.",
      year: "2023",
      tasks: ["E-commerce","Amazon Products","Hosting", "Designing"],
      skills: ["html","css","js"]
    },
    {
      title: "Trading Web UI",
      description: "Create a UI for trading of stokes, bitcoins and NFTs. Give update on price and value in market.",
      year: "2022",
      tasks: ["Live Market Page","Landing Page","Trading Section"],
      skills: ["figma","ai"]
    },
  ];

  return (
    <>
      <div ref={gallery} id="Projects" className={styles.gallery}>
        <div ref={left} className={styles.left}>
          <div className={styles.Heading}>
            <h1>
              projects <span>.</span>
            </h1>
          </div>
          <div ref={details} className={styles.detailsWrapper}>
  
            {projects.map((item, i) => (
                      <Detail key={i} data={item}
                    />
                    ))}

          </div>
        </div>

        <div ref={right} className={styles.right}>
      <div className={styles.blobS}></div>

          <div ref={photo} className={styles.photos}>
          {projects.map((item, i) => (
                      <div data-num={i} key={i} className={styles.photo}></div>
                    ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
