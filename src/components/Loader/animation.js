import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const collapseWords = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
    );

  return tl;
};