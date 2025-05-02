document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);


  let sectionOneTL = gsap.timeline();

  sectionOneTL.from(".name-container", {
    duration: 0.7,
    y: -80,
    opacity: 0,
  })

  sectionOneTL.to(".description", {
    delay: 1,
    duration: 0.7,
    opacity: 0.5,
  }, "one");

  sectionOneTL.to("#js, #html, #css, #react, #node", {
    delay: 1,
    duration: 0.7,
    opacity: 0.5,
    rotate: 20,
  }, "one");

  const names = gsap.utils.toArray(".name");
  gsap.from(names, {
    duration: 0.7,
    y: -80,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.to("#js", {
    y: 700,
    x: 100,
    duration: 1,
    rotate: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      scrub: true,

    }
  })
  gsap.to("#html", {
    y: 800,
    x: 200,
    duration: 1,
    rotate: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      scrub: true,

    }
  })
  gsap.to("#css", {
    y: 1100,
    x: -150,
    duration: 1,
    rotate: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      scrub: true,

    }
  })
  gsap.to("#react", {
    y: 1000,
    x: -50,
    duration: 1,
    rotate: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      scrub: true,

    }
  })
  gsap.to("#node", {
    y: 900,
    x: 100,
    duration: 1,
    rotate: 360,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      scrub: true,

    }
  })

  gsap.from("#about-text", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-one",
      start: "bottom 80%",
      endTrigger: "#about",
      end: "bottom 100%",
      scrub: true,
    }
  })
  gsap.from("#about-desc", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-one",
      start: "bottom 60%",
      endTrigger: "#about",
      end: "bottom 100%",
      scrub: true,
      // markers: true
    }
  })

  gsap.from(".experience-header", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 60%",
      endTrigger: "#experience",
      end: "top top",
      scrub: true,
    }
  })
  gsap.from(".experience-main-container", {
    y: 300,
    opacity: 0,
    duration: 3,
    ease: "power2",
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 50%",
      endTrigger: "#experience",
      end: "top top",
      scrub: true,
    }
  })
  gsap.from(".project-title", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#experience",
      start: "bottom bottom",
      endTrigger: "#project",
      end: "top 50%",
      scrub: true,
      // markers: true
    }
  })
  gsap.from(".project-container", {
    y: 300,
    opacity: 0,
    duration: 3,
    ease: "power2",
    scrollTrigger: {
      trigger: "#experience",
      start: "bottom 60%",
      endTrigger: "#project",
      end: "top 20%",
      scrub: true,
    }
  })



  // Refresh ScrollTrigger on resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
})