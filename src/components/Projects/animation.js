import { gsap } from "gsap";

export default function detailAnm(details) {
    gsap.set(details.current.children, { opacity: 0, y: 40 },);
    gsap.set(details.current.children[0], { opacity: 1, y: 0, });

    var tl = gsap.timeline();
    tl.to(details.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrub: 1,
      stagger: 2,
      ease: 'power3.out', // Easing function (you can choose a different one)
    });

    return tl;
}

function photoAnm(photo) {

  // gsap.set(photo.current.children, { opacity: 0},);
    var tl = gsap.timeline();
    tl.to(
      photo.current.children[0],
      {
        top: "48%",
        backgroundSize: "100%",
        backgroundPosition:"center center",
        ease:"power2"
      },
      "a"
    )
      .to(
        photo.current.children[1],
        {
          top: "150%",
        },
        "a"
      )
      .to(
        photo.current.children[1],
        {
          top: "52%",
          backgroundSize: "100%",
        backgroundPosition:"center center",
        ease:"power2"
        },
        "b"
      )
      .to(
        photo.current.children[0],
        {
          width: "77%",
          opacity:0.7
        },
        "b"
      );
      
    return tl;
}

export { photoAnm, detailAnm };
