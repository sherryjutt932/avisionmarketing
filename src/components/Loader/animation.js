import { gsap } from "gsap";
export const progressAnimation = (progressNumberRef) => {
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