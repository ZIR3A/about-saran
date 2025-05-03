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
    y: "220vh",
    x: "24vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-three",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#html", {
    y: "179vh",
    x: "-8vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-three",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#css", {
    y: "161vh",
    x: "-2vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-three",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#react", {
    y: "210vh",
    x: "-2vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-three",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#node", {
    y: "180vh",
    x: "-3vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-three",
      end: "bottom bottom",
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
      start: "bottom bottom",
      endTrigger: "#about",
      end: "top 50%",
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

  gsap.from(".exp-header", {
    y: 600,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: true,
      // markers: true
    }
  })


  gsap.from(".first-exp", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "top 40%",
      end: "top 30%",
      scrub: true,
    }
  })
  gsap.from(".second-exp", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "top 30%",
      end: "top 20%",
      scrub: true,
    }
  })
  gsap.from(".third-exp", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "top 20%",
      end: "top 10%",
      scrub: true,
    }
  })
  gsap.from(".fourth-exp", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "top 10%",
      end: "top 0%",
      scrub: true,
    }
  })



  // Refresh ScrollTrigger on resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
})