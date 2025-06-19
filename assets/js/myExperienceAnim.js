gsap.registerPlugin(ScrollTrigger);
let _descText = `A seasoned frontend React developer experience in designing
            and building
            innovative web applications. My expertise spans the entire web development lifecycle, from
            collaborating
            with
            designers to create intuitive user interfaces to optimizing code for performance and
            scalability.
            I'm proficient in using React's core concepts, state management libraries (like Redux or Context
            API), and popular tools like TypeScript, Jest, and Webpack. I have a strong understanding of
            modern web standards and best practices, ensuring that the applications I develop are accessible,
            responsive, and maintainable. My passion for continuous learning drives me to stay updated with the latest
            advancements in frontend technologies and explore new frameworks and libraries.`;

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".hero-anim", {
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  });

  const sectionTwoAnimaate = () => {
    let aboutDescClutter = "";
    _descText.split(" ").forEach((word) => {
      if (word !== "") aboutDescClutter += `<span>${word} </span>`;
    });
    document.querySelector(".description-section div").innerHTML = aboutDescClutter;
    const aboutDescriptionText = document.querySelectorAll(".description-section div span");
    const aboutDescriptionTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".description-section div",
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true
      },
    });
    aboutDescriptionText.forEach((span, i) => {
      aboutDescriptionTextTl.fromTo(
        span,
        {
          // ease: "power2.out",
          opacity: 0.2,
        },
        {
          // ease: "power2.out",
          opacity: 1,
          duration: 0.1,
        },
        i * 0.05
      );
    });
  };
  const animateExperience = () => {
    const nextElement = document.querySelector(".experience-end");
    const lastCard = document.querySelector(".experience-card.scroll");
    const pinnedSelections = gsap.utils.toArray(".pinned");
    gsap.to(".experience-title", {
      scrollTrigger: {
        trigger: ".experience-title",
        start: "top top",
        end: nextElement.offsetTop - window.innerHeight,
        pin: true,
        pinSpacing: false,
      },
    });

    pinnedSelections.forEach((section, index, sections) => {
      let container = section.querySelector(".experience-card-container");

      let nextSection = sections[index + 1] || lastCard;

      let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: index === sections.length ? `+=${lastCard.offsetHeight / 2}` : nextElement.offsetTop - window.innerHeight,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      gsap.fromTo(
        container,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
          },
        }
      );
    });

    const heroh1 = document.querySelector(".experience-title");
    gsap.to(heroh1, {
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top top",
        end: nextElement.offsetTop - window.innerHeight,
        scrub: 1,
        // markers: true,
        onUpdate: (self) => {
          heroh1.style.opacity = 1 - self.progress;
        },
      },
    });
  };

  const sectionFourAnimate = () => {
    const hightlightSection = document.querySelector(".projects-section");
    const proContainers = gsap.utils.toArray(".pro-container");
    gsap.fromTo(
      proContainers,
      {
        x: 50,
      },
      {
        x: -(hightlightSection.scrollWidth - window.innerWidth + 50),
        scrollTrigger: {
          trigger: hightlightSection,
          start: "top 10%",
          end: () => `+=${hightlightSection.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          pinsSpacing: false,
          invalidateOnRefresh: true,
          // anticipatePin: -1,
        },
      }
    );
  };
  sectionFourAnimate();
  animateExperience();
  sectionTwoAnimaate();
});
