import React, { useState, useEffect } from "react";
import styles from './style.module.scss';
import Image from 'next/image';

export default function index({data, selectedProject}) {
    // const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [trans, setTrans] = useState(0);

  useEffect(() => {

    const handleWindowMouseMove = event => {
    const { innerWidth: width, innerHeight: height } = window;

    if(event.clientY > (innerHeight - (innerHeight/10))){
      setTrans(100);
  }
    else if(event.clientY > (innerHeight - (innerHeight/2) + 50)){
        setTrans(50);
    }
    else{setTrans(0);}
      setCoords({
        x: event.clientX,
        y: event.clientY
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);


    return (
        <div className={styles.descriptions}>
            {
                data.map( (project, i) => {
                    const { title2, description, img } = project;
                    return (
                   <div key={i} >
                    <div 
                        
                        // onMouseMove={handleMouseMove}
                        className={styles.description}
                        style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p className={styles.num}>[0{i+1}]</p>
                        <div
                        className={styles.wrapper}>
                            <p>{title2}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                        {selectedProject == i ? 
                        <Image 
                        style={{
                            left: `${coords.x+1}px`,
                            top: `${coords.y}px`,
                            transform: `translateY(-${trans}%)`
                          }}
                        priority={true}
                        className={styles.descImg} 
                        loading="eager"
                        src={require(`../../assets/images/${img}`).default}
                        alt="" ></Image> 
                        : null
                        }
                   </div>
                    )
                })
            }
        </div>
    )
}