
// function scrollProjectContent() {
//   const _scrollContainer = document.querySelector("#section-four");
//   const _scrollContent = gsap.utils.toArray(".pro-container");
//   let _mainWIdth = window.innerWidth
//   let _containerScrollWidth = _scrollContainer.scrollWidth
//   if (_mainWIdth > 960) {
//     function getScrollWidth() {
//       return ((_containerScrollWidth) - _mainWIdth) + 42
//     }
//     gsap.from(_scrollContent, {
//       x: getScrollWidth() * -1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#section-four",
//         start: "top 5%",
//         pin: true,
//         scrub: true,
//         end: getScrollWidth() + 1000,
//         invalidateOnRefresh: true,
//         anticipatePin: 1,
//         // markers: true
//       }
//     })
//   }
// }

function scrollProjectContent() {
  const hightlightSection = document.querySelector("#section-four");
  const highlightCardsContainer = document.querySelector(".pro-container-wrapper");

  function getHightContainerScrollWidth() {
      let _scrollWidth = highlightCardsContainer.scrollWidth
      return -((_scrollWidth + 50) - window.innerWidth)
  }

  const animate = gsap.to(highlightCardsContainer, {
      x: getHightContainerScrollWidth,
  })

  ScrollTrigger.create({
      trigger: hightlightSection,
      start: "top top",
      end: () => `+=${getHightContainerScrollWidth() * -1}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      // markers: true,
      animation: animate
  })
}

scrollProjectContent();