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
      scrub: 1,
      // markers: true          
    }
  });

  // Add staggered animations to the timeline
  spans.forEach((span, i) => {
    tl.to(span, {
      ease: "power2.out",
      color: "#D2D0BA",
      duration: 0.1,
    }, i * 0.05);
  });
  gsap.to('.scrolling-content', {
    x: '-100%',
    duration: 50,
    yoyo: true,
    repeat: -1,
  })

  
  
  const _scrollTL = gsap.timeline()
  
  _scrollTL.to(".exp-header", {
      top: "8%",
      opacity: 1,
      scrollTrigger: {
        trigger: "#section-three",
        start: "top 30%",
        scrub: 1,
      }
    })
  const _expElm = document.querySelector("#section-three")
  // section three experience animation
  _scrollTL.to('.exp-card', {
    top: (index) => `${(50 + (index * 8))}%`,
    ease: "none",
    scale: 1.1,
    scrollTrigger: {
      trigger: _expElm,
      start: "top top",
      end: () => `+=${_expElm.scrollWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1, // Helps with smooth transitions
      invalidateOnRefresh: true,
    },
    stagger: {
      each: 0.5,
      from: "start"
    },
  })
  const hightlightSection = document.querySelector("#section-four");
  const highlightCardsContainer = document.querySelector(".pro-container-wrapper");
  function getHightContainerScrollWidth() {
    let _scrollWidth = highlightCardsContainer.scrollWidth
    return -((_scrollWidth + 60) - window.innerWidth)
  }
  _scrollTL.to(highlightCardsContainer, {
    x: getHightContainerScrollWidth,
    scrollTrigger: {
      trigger: hightlightSection,
      start: "top top",
      end: () => `+=${getHightContainerScrollWidth() * -1}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
    }
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