"use client";
// Import necessary dependencies
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Loadable from "react-loadable";
import Lenis from "@studio-freight/lenis";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import your dynamic components
import Hero from "@/components/Hero";
import Achivements from "@/components/Achivements";
import Marque from "@/components/Marque";
import Skills from "@/components/Skills";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import Services from "@/components/Education";
import Projects from "@/components/Projects";

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const anim = useRef();

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  // useEffect(() => {
  //   gsap.fromTo(anim.current, {
  //     clipPath:"circle(0% at 50% 50%)",
  //     duration:1,
  //   },
  //   {
  //     clipPath:"circle(100% at 50% 50%)",
  //   })
    
  // }, [])
  
  // useEffect(() => {
  //   // Function to reload the page on resize
  //   const handleResize = () => {
  //     window.location.reload();
  //   };

  //   // Add event listener for resize
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <Loader onComplete={handleIntroComplete} />
      <Hero />
      <Projects />
      <Services />
      <Quote />
      <Skills />
      <Footer />
    </>
  );
}
