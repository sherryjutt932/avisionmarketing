"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [points, setPoints] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const cont = useRef();
  const calculateDistance = (point1, point2) => {
    return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const differencey = window.innerHeight - cont.current.clientHeight;
    const differencex = window.innerWidth - cont.current.clientWidth;

    const newPoint = {
      x: clientX - differencex / 2,
      y: clientY - differencey / 2,
      timestamp: Date.now(),
    };

    // Check the distance from the last point
    if (
      points.length === 0 ||
      calculateDistance(points[points.length - 1], newPoint) >= 200
    ) {
      setPoints((prevPoints) => [...prevPoints, newPoint]);
    }

    // Remove the oldest point if more than four points
    if (points.length > 4) {
      setPoints((prevPoints) => prevPoints.slice(1));
    }
  };

  useEffect(() => {
    if (isHovered) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [points]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Remove the oldest point
      setPoints((prevPoints) =>
        prevPoints.length > 0 ? prevPoints.slice(1) : []
      );
    }, 500); // Remove one point every second

    return () => {
      clearInterval(timer);
    };
  }, [points]); // Run this effect whenever points change

  useEffect(() => {
    const container = cont.current;
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className={styles.container} ref={cont}>
      {points.map((point, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{ left: point.x, top: point.y }}
        ></div>
      ))}
      {points.length >= 2 && (
        <svg className={styles.line} height="100%" width="100%">
          {points.map((point, index) =>
            index > 0 ? (
              <line
                key={index}
                x1={
                  points[index - 1] != null
                    ? points[index - 1].x
                    : points[index].x
                }
                y1={
                  points[index - 1] != null
                    ? points[index - 1].y
                    : points[index].y
                }
                x2={point.x}
                y2={point.y}

                // x1={points[index].x}
                // y1={points[index].y}
                // x2={points[(index + 1) % points.length].x}
                // y2={points[(index + 1) % points.length].y}
              />
            ) : (
              <></>
            )
          )}
        </svg>
      )}

      <div id="blurr" className={styles.blurr}></div>
    </div>
  );
}
