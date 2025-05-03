
function scrollProjectContent() {
  const _scrollContainer = document.querySelector("#section-four");
  const _scrollContent = gsap.utils.toArray(".pro-container");
  let _mainWIdth = window.innerWidth
  let _containerScrollWidth = _scrollContainer.scrollWidth

  function getScrollWidth() {
    return ((_containerScrollWidth) - _mainWIdth) + 42
  }
  gsap.from(_scrollContent, {
    x: getScrollWidth() * -1,
    ease: "none",
    scrollTrigger: {
      trigger: "#section-four",
      pin: true,
      scrub: true,
      end: getScrollWidth() + 1000,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })
}
scrollProjectContent();

var onresize = function () {
  scrollProjectContent();

}
window.addEventListener("resize", onresize);