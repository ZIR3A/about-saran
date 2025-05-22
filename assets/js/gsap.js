document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  let sectionOneTL = gsap.timeline();
  sectionOneTL.from(".name-container", {
    duration: 0.7,
    y: -80,
    opacity: 0,
  });

  sectionOneTL.to(
    ".description",
    {
      delay: 1,
      duration: 0.7,
      opacity: 0.5,
    },
    "one"
  );

  const names = gsap.utils.toArray(".name");
  gsap.from(names, {
    duration: 0.7,
    y: -80,
    opacity: 0,
    stagger: 0.2,
  });

  let aboutDescClutter = "";
  document
    .getElementById("about-desc")
    .innerHTML.split(" ")
    .forEach((word) => {
      if (word !== "") aboutDescClutter += `<span>${word}</span>`;
    });
  document.getElementById("about-desc").innerHTML = aboutDescClutter;

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
    },
  });

  // Add staggered animations to the timeline
  spans.forEach((span, i) => {
    tl.to(
      span,
      {
        ease: "power2.out",
        color: "#597DA2",
        duration: 0.1,
      },
      i * 0.05
    );
  });

  const _scrollTL = gsap.timeline();

  _scrollTL.to(".exp-header", {
    top: "8%",
    opacity: 1,
    scrollTrigger: {
      trigger: "#section-two",
      start: "bottom 80%",
      scrub: 1,
      // markers: true
    },
  });
  
  const hightlightSection = document.querySelector("#section-four");
  const highlightCardsContainer = document.querySelector(".pro-container-wrapper");
  function getHightContainerScrollWidth() {
    let _scrollWidth = highlightCardsContainer.scrollWidth;
    return -(_scrollWidth + 60 - window.innerWidth);
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
    },
  });



  const _scroller = document.querySelector("#scroller");
  console.log(_scroller.scrollWidth);
  let scrollTl = gsap.timeline({});
  scrollTl.to("#scroller", {
    x: `-=${_scroller.scrollWidth}`,
    repeat: -1,
    ease: "none",
    duration: 20,
  });

  _scroller.addEventListener("mouseenter", () => scrollTl.pause());
  _scroller.addEventListener("mouseleave", () => scrollTl.play());
});
