gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 2,
    effects: false,
  });
function animateWholePage() {
    let wholePageTL = gsap.timeline();
    const sectionOneAnimate = () => {
        wholePageTL.from(".name-container", {
            duration: 0.7,
            y: -80,
            opacity: 0,
        });
        const names = gsap.utils.toArray(".my-name");
        wholePageTL.from(
            names,
            {
                duration: 0.4,
                y: -80,
                opacity: 0,
                stagger: 0.2,
            },
            "name_description"
        );

        wholePageTL.to(
            ".my-description",
            {
                duration: 0.7,
                opacity: 0.5,
            },
            "name_description"
        );
    };
    sectionOneAnimate();

    const sectionTwoAnimaate = () => {
        let aboutDescClutter = "";
        document
            .getElementById("about-desc")
            .innerHTML.split(" ")
            .forEach((word) => {
                if (word !== "") aboutDescClutter += `<span>${word}</span>`;
            });
        document.getElementById("about-desc").innerHTML = aboutDescClutter;
        const aboutDescriptionText = document.querySelectorAll("#about-desc span");
        const aboutDescriptionTextTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-two",
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
                // markers: true
            },
        });
        aboutDescriptionText.forEach((span, i) => {
            aboutDescriptionTextTl.to(
                span,
                {
                    ease: "power2.out",
                    color: "#597DA2",
                    duration: 0.1,

                },
                i * 0.05
            );
        });
    };
    sectionTwoAnimaate()


    const sectionThreeAnimate = () => {
        wholePageTL.from(".exp-header", {
            top: "50%",
            opacity: 0,
            scrollTrigger: {
                trigger: "#section-two",
                start: "bottom 90%",
                end: "bottom 60%",
                scrub: 1,
                // markers: true
            },
        });

        const _expElm = document.querySelector("#section-three");
        // section three experience animation
        wholePageTL.to(".exp-card", {
            top: (index) => `${50 + index * 8}%`,
            ease: "none",
            scale: 1.3,
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
                from: "start",
            },
        });
    }
    sectionThreeAnimate()
    const sectionFourAnimate = () => {
        const hightlightSection = document.querySelector("#section-four");
        const highlightCardsContainer = document.querySelector(".pro-container-wrapper");
        function getHightContainerScrollWidth() {
            let _scrollWidth = highlightCardsContainer.scrollWidth;
            return -(_scrollWidth + 60 - window.innerWidth);
        }
        wholePageTL.to(highlightCardsContainer, {
            x: getHightContainerScrollWidth,
            scrollTrigger: {
                trigger: hightlightSection,
                start: "top top",
                end: () => `+=${getHightContainerScrollWidth() * -1}`,
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // markers: true
            },
        });
    }
    sectionFourAnimate()

    const scrollTextSection = () => {
        const _scroller = document.querySelector("#scroller");
        let scrollTl = gsap.timeline({});
        scrollTl.to("#scroller", {
            x: `-=${_scroller.scrollWidth}`,
            repeat: -1,
            ease: "none",
            duration: 20,
        });

        _scroller.addEventListener("mouseenter", () => scrollTl.pause());
        _scroller.addEventListener("mouseleave", () => scrollTl.play());
    }
    scrollTextSection()
}



document.addEventListener("DOMContentLoaded", () => {
    animateWholePage();
});
