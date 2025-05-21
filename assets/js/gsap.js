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

  const names = gsap.utils.toArray(".name");
  gsap.from(names, {
    duration: 0.7,
    y: -80,
    opacity: 0,
    stagger: 0.2,
  });

  const highlightCardsContainer = document.querySelector(".pro-container-wrapper");

  function getHightContainerScrollWidth() {
    let _scrollWidth = highlightCardsContainer.scrollWidth
    return ((_scrollWidth + 20) - window.innerWidth)
  }
  const sections = gsap.utils.toArray("section");
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
      start: "top 80%",
      end: "50% 70%",
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
  gsap.to('.scrolling-content', {
    x: '-100%',
    duration: 50,
    yoyo: true,
    repeat: -1, 
  })


  // gsap.from(".pro-header", {
  //   y: 400,
  //   opacity: 0,
  //   ease: "power2",
  //   scrollTrigger: {
  //     trigger: "#section-two",
  //     start: "bottom 90%",
  //     endTrigger: "#section-four",
  //     end: "top 5%",
  //     scrub: 1,
  //   }
  // })
  // gsap.from(".pro-container-wrapper", {
  //   y: 400,
  //   opacity: 0,
  //   ease: "power2",
  //   scrollTrigger: {
  //     trigger: "#section-two",
  //     start: "bottom 90%",
  //     endTrigger: "#section-three",
  //     end: "top 20%",
  //     scrub: 1,
  //   }
  // })
  const _expElm = document.querySelector("#section-three")

  gsap.to(".exp-header", {
    top: "10%",
    opacity: 1,
    scrollTrigger: {
      trigger: "#skills-section",
      start: "top 60%",
      // endTrigger: "#section-three",
      // end: "top top",
      scrub: 1,
      // markers: true
    }
  })



  // section three experience animation
  gsap.to('.exp-card', {
    top: (index) => `${(50 + (index * 8))}%`,
    ease: "none",
    scale: 1.1,
    scrollTrigger: {
      trigger: "#section-three",
      start: "top top",
      end: () => `+=${_expElm.scrollWidth}`,
      scrub: 1,
      pin: true,
      refreshPriority: -1,
      anticipatePin: 1, // Helps with smooth transitions
      // markers: true,
      invalidateOnRefresh: true,
    },
    stagger: {
      each: 0.5,
      from: "start"
    },
  })

  const aboutTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-one",
      start: "bottom 80%",
      endTrigger: "#section-two",
      end: "top 50%",
      scrub: 1,
      refreshPriority: -1,
      anticipatePin: 1, // Helps with smooth transitions
      // markers: true
    },
  });
  aboutTextTl.from("#about-text", {
    y: 300,
    ease: "none",
    opacity: 0,
  }).from("#about-desc", {
    y: 200,
    ease: "none",
    opacity: 0,
  }, "<")

})