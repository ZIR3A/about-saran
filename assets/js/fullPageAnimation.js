gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 3,
    smoothTouch: 1,
    effects: true,
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
                start: "top 60%",
                end: "bottom bottom",
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
            top: "80%",
            opacity: 0,
            scrollTrigger: {
                trigger: "#section-two",
                start: "bottom 90%",
                end: "bottom 60%",
                scrub: 1,
                // markers: true
            },
        });
        wholePageTL.to(".exp-card-first", {
            top: "38%",
            ease: "none",
            scale: 1.3,
            scrollTrigger: {
                trigger: "#section-three",
                start: "top 60%",
                end: "top 10%",
                scrub: 1,
                // markers: true
            },
        });

        const _expElm = document.querySelector("#section-three");
        const _expCard = gsap.utils.toArray(".anim-exp-card");
        function totalHeightExpCards() {
            let _totalHeight = 0;
            _expCard.forEach((card) => {
                _totalHeight += card.offsetHeight;
            });
            return _totalHeight + 100;
        }
        // console.log(totalHeightExpCards());

        const expTL = gsap.timeline({
            scrollTrigger: {
                trigger: _expElm,
                start: "top top",
                end: () => `+=${totalHeightExpCards()}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1, // Helps with smooth transitions
                invalidateOnRefresh: true,
                pinsSpacing: false, // give padding to the pinned element
                // markers: true
            },
        })
        // section three experience animation
        expTL.to(_expCard, {
            top: (index) => `${46 + index * 7}%`,
            ease: "none",
            scale: 1.3,
            // delay: (index) => index * 0.4,
            stagger: {
                each: 0.5,
            },
        });
    }
    sectionThreeAnimate()
    const sectionFourAnimate = () => {
        const hightlightSection = document.querySelector("#section-four");
        const proContainers = gsap.utils.toArray(".pro-container");

        function getHightContainerScrollWidth() {
            let _scrollWidth = proContainers[0].offsetWidth * proContainers.length;
            return -(((_scrollWidth) - window.innerWidth) + 100);
        }

        wholePageTL.to(proContainers, {
            x: getHightContainerScrollWidth,
            scrollTrigger: {
                trigger: hightlightSection,
                start: "top 10%",
                end: () => `+=${getHightContainerScrollWidth() * -1}`,
                scrub: 1,
                pin: true,
                pinsSpacing: true,
                invalidateOnRefresh: true,
                // anticipatePin: -1,
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
