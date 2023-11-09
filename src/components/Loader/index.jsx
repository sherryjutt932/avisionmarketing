import React, { useEffect, useRef } from "react";
import { words } from "./data";
import styles from "./Loader.module.scss";
import { introAnimation, collapseWords, progressAnimation } from "./animation";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const abc = useRef(null);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    // gsap.fromTo(nameRef.current, {
    //   opacity:0,
    //   scale:.5,
    //   duration:4,
    // },{
    //   opacity:1,
    //   scale:1,
    // });

    tl.add(progressAnimation(progressRef, progressNumberRef), 0)
    .fromTo(abc.current, {
      clipPath:"circle(100% at 50% 50%)",
      duration:1,
    },
    {
      clipPath:"circle(0% at 50% 50%)",
    })
    .to(loaderRef.current, {
      onComplete,
    });

    return () => {
      tl.kill();
    };
  }, []);
  
  // useEffect(() => {
  //   timeline &&
  //     timeline
  //       .add(introAnimation(wordGroupsRef))
  //       .add(progressAnimation(progressRef, progressNumberRef), 0)
  //       .add(collapseWords(loaderRef), "-=1");
  // }, [timeline]);

  return (
    <div className={styles.loader__wrapper} ref={abc}>
      <div className={styles.loader__progressWrapper}>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      {/* <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words} ref={nameRef}>
            Avision Marketing 
        </div>
      </div> */}
    </div>
  );
};

export default Loader;