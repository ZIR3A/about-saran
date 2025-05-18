document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  let jsTl = gsap.timeline( {
    scrollTrigger: {
      trigger: ".main-wrapper",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true
    }
  });
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

  jsTl.to("#js", {
    y: "120vh",
    // x: "24vw",
    duration: 1,
    rotate: 360,
    ease: "none",
  })
  jsTl.to("#js", {
    x: "80vw",
    // y:'180vh',
    duration: 1,
    rotate: 360,
    ease: "none",
  })
  jsTl.to("#js", {
    y: "200vh",
    // x: "10vw",
    duration: 1,
    rotate: 360,
    ease: "none",
  })
  jsTl.to("#js", {
    y: "300vh",
    // x: "-24vw",
    duration: 1,
    rotate: 360,
    ease: "none",
  })
  jsTl.to("#js", {
    y: "305vh",
    duration: 1,
    rotate: 360,
    ease: "none",
  })

  // jsTl.to("#js", {
  //   y: "120vh",
  //   // x: "-24vw",
  //   duration: 1,
  //   rotate: 360,
  //   ease: "none",
  // })

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

  const hightlightSection = document.querySelector("#section-four");
  const highlightCardsContainer = document.querySelector(".pro-container-wrapper");

  function getHightContainerScrollWidth() {
    let _scrollWidth = highlightCardsContainer.scrollWidth
    return ((_scrollWidth + 20) - window.innerWidth)
  }
  const sections = gsap.utils.toArray("section");
  const allSectionHeight = sections.reduce((acc, section) => acc + section.offsetHeight, 0);

  // Final animation to last section

  gsap.to("#react", {
    y: allSectionHeight + getHightContainerScrollWidth() - 800,
    x: "-2vw",
    duration: 10,
    rotate: 360,
    width: "4%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section-one",
      start: "50% 50%",
      endTrigger: "#contact",
      end: "bottom bottom",
      scrub: true,
      // markers: true
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

  gsap.to("#section-two", {
    y: -250,
    duration: 1,
    opacity: 1,
    // ease: "power1.out",
    scrollTrigger: {
      trigger: "#section-one",
      start: "bottom 90%",
      endTrigger: "#section-two",
      end: "bottom bottom",
      scrub: 0.8,
      // markers: true
    }
  })


  let aboutDescClutter = ""
  document.getElementById("about-desc").innerHTML.split(" ").forEach((word) => {
    if (word !== "") aboutDescClutter += `<span>${word}</span>`
  })
  document.getElementById("about-desc").innerHTML = aboutDescClutter


  // Select all the spans you want to animate
  const spans = document.querySelectorAll("#about-desc span");

  // Create a timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-desc",
      start: "top 95%",
      end: "50% 85%",
      scrub: 1,              // smooth animation tied to scroll position
      // markers: true           // uncomment to see scroll trigger markers (for debugging)
    }
  });

  // Add staggered animations to the timeline
  spans.forEach((span, i) => {
    tl.to(span, {
      ease: "power2.out",
      color: "#D2D0BA", // your target color
      duration: 0.1,    // duration of each individual span's color change
    }, i * 0.05);      // stagger delay (adjust as needed)
  });

  gsap.to("#section-three", {
    y: -200,
    duration: 1,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#section-two",
      start: "top 80%",
      endTrigger: "#section-three",
      end: "top 80%",
      scrub: true,
      // markers: true
    }
  })


  gsap.from(".exp-header", {
    y: 400,
    opacity: 0,
    ease: "power2",
    scrollTrigger: {
      trigger: "#section-two",
      start: "50% 70%",
      endTrigger: "#section-three",
      end: "to 50%",
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
})