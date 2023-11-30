import { React, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import { photoAnm, detailAnm } from "./animation.js";
import Detail from "./Detail.jsx";
import { gsap } from "gsap";
import img1 from "../../assets/images/media1.png"
import img2 from "../../assets/images/media2.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);


export default function index() {
  const gallery = useRef(null);
  const left = useRef(null);
  const details = useRef(null);
  const right = useRef(null);
  const photo = useRef(null);
  const imgarray = [img1,img2]

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
      title: "Social Media Marketing",
      description:
        "Instagram marketing in which we create and manage instagram post",
      year: "2023",
      tasks: ["Post", "Account Management", "Marketing"],
      skills: ["ai", "figma", "ps"],
    },
    {
      title: "Social Media Marketing",
      description:
        "Instagram marketing in which we create and manage instagram post",
      year: "2023",
      tasks: ["Post", "Account Management", "Marketing"],
      skills: ["ai", "figma", "ps"],
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
              <Detail key={i} data={item} />
            ))}
          </div>
          <div className={styles.mobile}>
          {projects.map((item, i) => {
              return(
                <>
                <Detail key={i} data={item} />
                <Image src={imgarray[i]} alt="" key={i} className={styles.img}/>
                </>
              )
            })}
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
