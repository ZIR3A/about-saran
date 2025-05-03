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
    opacity: 0.3,
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
    y: "220vh",
    x: "-15vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-four",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#react", {
    y: "290vh",
    x: "-2vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-four",
      end: "bottom bottom",
      scrub: true,

    }
  })
  gsap.to("#node", {
    y: "250vh",
    x: "-3vw",
    duration: 1,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#section-four",
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
      endTrigger: "#section-two",
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
      endTrigger: "#section-two",
      end: "bottom 100%",
      scrub: true,
      // markers: true
    }
  })


  gsap.from(".exp-header", {
    y: 600,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-two",
      start: "bottom 95%",
      endTrigger: "#section-three",
      end: "to 50%",
      scrub: true,
    }
  })


  gsap.from(".first-exp", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "top 50%",
      end: "top 40%",
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
  gsap.from(".pro-header", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "bottom 90%",
      endTrigger: "#section-four",
      end: "top 20%",
      scrub: true,
    }
  })
  gsap.from(".pro-container-wrapper", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-three",
      start: "bottom 90%",
      endTrigger: "#section-four",
      end: "top 20%",
      scrub: true,
    }
  })



  // Refresh ScrollTrigger on resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
})