gsap.registerPlugin(ScrollTrigger);
gsap.from("#about-text", {
  y: -800,
  opacity: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "middle",
    scrub: 1,
    // markers: true
  },
});
gsap.from("#about-desc", {
  y: -800,
  opacity: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: "#hero-section",
    start: "middle",
    scrub: 1,
    // markers: true
  },
});

let experienceSection = gsap.utils.toArray(".experience-panel");

gsap.from(experienceSection, {
  xPercent: -120 * (experienceSection.length - 1),
 ase: "power1.inOut",
  scrollTrigger: {
    trigger: ".experience-horizontal-scroll",
    pin: true,
    scrub: 1,
    // snap: 1 / (experienceSection.length - 1),
    end: () => "+=" + document.querySelector(".experience-main-container").offsetWidth,
  },
});
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -102 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  },
});

let scrollIcon = ".scroll-icon";
gsap.fromTo(scrollIcon, {
  y: 0, // Start at the original position
  opacity: 1 // Start at full opacity
}, {
  y: -20, // Move up
  opacity: 0.2, // Fade out
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});



gsap.from(".experience-main-title", {
  x: -800,
  opacity: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "start",
    scrub: 1,
     ease: "power1.inOut"
  },
});