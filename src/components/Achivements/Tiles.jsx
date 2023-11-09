
import React, { useRef, useEffect } from 'react'
import styles from './style.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function Tiles({data, setSelectedProject}) {
  return (
    <div className={styles.titles}>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);
    const tile = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    

    useEffect(() => {
      const container = tile.current;
  
      const handleMouseOver = () => {
        setSelectedProject(i)
      };
  
      const handleMouseOut = () => {
        setSelectedProject(null)
      };
  
      if (container) {
        container.addEventListener('mouseover', handleMouseOver);
        container.addEventListener('mouseout', handleMouseOut);
  
        // Cleanup event listeners on component unmount
        return () => {
          container.removeEventListener('mouseover', handleMouseOver);
          container.removeEventListener('mouseout', handleMouseOut);
        };
      }
    }, []);

    return (
        <div ref={container} className={styles.title}>
            <p className={styles.num}>[0{i+1}]</p>
            <div 
                className={styles.wrapper}
                ref={tile}
                
            >
                <motion.p style={{clipPath: clip}}>
                    {title}
                </motion.p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}