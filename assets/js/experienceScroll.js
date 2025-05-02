// function scrollContent() {
//   const _scrollContainer = document.querySelector("#container");
//   const _scrollContent = gsap.utils.toArray(".content");
//   let _mainWIdth = window.innerWidth
//   let _containerScrollWidth = _scrollContainer.scrollWidth
//   console.log(_scrollContent[0].offsetWidth * _scrollContent.length, _mainWIdth, "@@@");

//   function getScrollWidth() {
//     return ((_containerScrollWidth) - _mainWIdth) + 50
//   }
//   gsap.to(_scrollContent, {
//     x: -getScrollWidth(),
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#container",
//       pin: true,
//       scrub: true,
//       snap: {
//         snapTo: "labels",
//         duration: { min: 0.2, max: 1 },
//         delay: 0.2,
//         ease: "power1.inOut"
//       },
//       end: getScrollWidth(),
//       markers: true,
//       invalidateOnRefresh: true,
//       anticipatePin: 1
//     }
//   })
// }
// scrollContent();

// var onresize = function () {
//   scrollContent();

// }
// window.addEventListener("resize", onresize);

function scrollContent() {
  const _scrollContainer = document.querySelector("#experience");
  const _scrollContent = gsap.utils.toArray(".experience-panel");
  let _mainWIdth = window.innerWidth
  let _containerScrollWidth = _scrollContainer.scrollWidth
  console.log(_scrollContent[0].offsetWidth * _scrollContent.length, _mainWIdth, "@@@");

  function getScrollWidth() {
    return ((_containerScrollWidth) - _mainWIdth) + 42
  }
  gsap.to(_scrollContent, {
    x: -getScrollWidth(),
    ease: "none",
    scrollTrigger: {
      trigger: "#experience",
      pin: true,
      scrub: true,
      end: getScrollWidth(),
      // markers: true,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })
}
scrollContent();

var onresize = function () {
  scrollContent();

}
window.addEventListener("resize", onresize);