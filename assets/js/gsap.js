gsap.registerPlugin(ScrollTrigger);
gsap.from("#about-text", {
  x: 400,
  y: 100,
  duration: 3,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "top",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
});
gsap.to("#about-text", {
  y: 50,
  duration: 3,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "top",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
});
gsap.from("#about-desc", {
  x: -400,
  y: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "top",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
});
gsap.to("#about-desc", {
  x: 20,
  y: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "top",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
});




let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  },
});
