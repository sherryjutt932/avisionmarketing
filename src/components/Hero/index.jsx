import React, { useRef, useEffect, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import Name from "./Name.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkRow from "../LinkRow";
import { HiDownload } from "react-icons/hi";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoCodepen,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";
import StickyIcon from "./StickyIcon.jsx";
import Blob from "@/components/Blob/imgseq"

gsap.registerPlugin(ScrollTrigger);


export default function index() {
  const section = useRef();
  const name = useRef();
  const intro = useRef();
  const blobref = useRef();
  var delayval = 6;
  const navItems = [
    {
      name: "Services",
      ref: "Education",
      url: "",
    },
    {
      name: "Skills",
      ref: "Skills",
      url: "",
    },
    {
      name: "Contact",
      ref: "Contact",
      url: "",
    },
  ];

  useLayoutEffect(() => {
    gsap.set(name, { y: 0 });

    var tl = gsap.timeline();
    tl.to(name.current, {
      y: 0,
      delay:delayval,
      scale: 1.3,
      scrub: 1,
      ease: "power3", // Easing function (you can choose a different one)
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top top",
      end: "bottom top",
      animation: tl,
      scrub: true,
    });

    gsap.set(blobref.current, { opacity: 0 });
    gsap.set(intro.current.children, { y: -100, opacity: 0 });
    gsap.set([intro.current.children[1], intro.current.children[2]], {
      y: 100,
      opacity: 0,
      delay:5,
    });

    var introtl = gsap.timeline();
    introtl.to(intro.current.children, {
      y: 0,
      opacity: 1,
      duration: 2,
      delay:delayval,
      ease: "power3", // Easing function (you can choose a different one)
    },"a")
    .to(blobref.current,
    {
      duration: 1,
      delay:delayval+1,
      opacity: 1,
    },"a");
  }, []);

  const handleDownload = () => {
    const pdfUrl = "/";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body after the download
    document.body.removeChild(link);

    window.open("", "_blank");
  };

  return (
    <section ref={section} className={styles.Hero}>
      <div ref={intro} style={{ zIndex: 3 }}>
        <nav>
          <div className={styles.logo}>
            AM
          </div>

          <div className={styles.nav}>
            <LinkRow data={navItems} />
          </div>
        </nav>

        <ul className={styles.SocialIcons}>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.instagram.com/avisionmarketing/"}
              icon={<BiLogoLinkedin />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.instagram.com/avisionmarketing/"}
              icon={<BiLogoInstagram />}
            />
          </li>
          <li className={styles.Icon}>
            <StickyIcon
              url={"https://www.instagram.com/avisionmarketing/"}
              icon={<BiLogoFacebook />}
            />
          </li>
        </ul>

        <div className={styles.resume}>
          <button >
            <span>
              <HiDownload />
            </span>
            Portfolio
          </button>
        </div>
      </div>

      <div ref={name} style={{ zIndex: 2 }} className={styles.Name}>
        <Name />
      </div>

      <div style={{ zIndex: 1 }}>
        <div className={styles.blobS}></div>
        <div ref={blobref}>
        <Blob />
        </div>
      </div>
    </section>
  );
}
