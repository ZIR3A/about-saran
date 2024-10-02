gsap.registerPlugin(ScrollTrigger);

gsap.to("#about-text", {
  x: 450,
  y: 100,
  duration: 3,
  scrollTrigger: {
    trigger: "#about",
    start: "-500px",
    end: "top top",
    scrub: 1,
    // markers: true
  },
});
gsap.to("#about-desc", {
  x: -400,
  y: -50,
  duration: 3,
  scrollTrigger: {
    trigger: "#about",
    scrub: 1,
    start: "-500px",
    end: "top top",
    // markers: true,
  },
});
