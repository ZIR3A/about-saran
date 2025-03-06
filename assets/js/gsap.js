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
    // snap: 1 / (sections.length - 1),
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

gsap.from(".contact-animator-wrapper", {
  opacity: 0.1, // Start invisible
  y: 1000, // Start 50px below
  duration: 1, // Animation duration
  ease: "power2.out", // Smooth easing
  scrollTrigger: {
    trigger: ".contact-container", // Element to trigger the animation
    start: "top 80%", // Start animation when the top of the element hits 80% of the viewport
    end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport
    scrub: 1,
  },
});