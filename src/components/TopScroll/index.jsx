import React, { useEffect,useState } from 'react';
import styles from './style.module.scss';

export default function index() {
    const [scrollWidth, setScrollWidth] = useState("0vw");

    useEffect(() => {
        const setScrollLine = () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollWidth(scrollPercentage + 'vw');
          };

        // Attach the scroll event listener
        window.addEventListener('scroll', setScrollLine);

        // Clean up the event listener on unmount
        return () => {
        window.removeEventListener('scroll', setScrollLine);
        };
    }, [])
    
  return (
    <div className={styles.topScroll} style={{ width: scrollWidth }}>
    </div>
  )
}
