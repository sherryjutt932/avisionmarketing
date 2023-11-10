import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.scss";
import { progressAnimation } from "./animation";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const abc = useRef(null);
  const progressNumberRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(progressAnimation( progressNumberRef), 0)
    .fromTo(abc.current,1, {
      clipPath:"circle(100% at 50% 50%)",
    },
    {
      clipPath:"circle(0% at 50% 50%)",
    })
    .to(abc.current, {
      display:"none"
    },">")
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
   <div className={styles.loader}  ref={abc}>
     <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
    </div>
   </div>
  );
};

export default Loader;