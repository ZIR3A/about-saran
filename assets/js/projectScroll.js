
function scrollContent() {
  const _scrollContainer = document.querySelector("#project");
  const _scrollContent = gsap.utils.toArray(".work-item");
  let _mainWIdth = window.innerWidth
  let _containerScrollWidth = _scrollContainer.scrollWidth
  console.log(_scrollContent[0].offsetWidth * _scrollContent.length, _mainWIdth, "@@@");

  function getScrollWidth() {
    return ((_containerScrollWidth) - _mainWIdth) + 42
  }
  gsap.from(_scrollContent, {
    x: getScrollWidth() * -1,
    ease: "none",
    scrollTrigger: {
      trigger: "#project",
      pin: true,
      scrub: true,
      end: getScrollWidth() + 1000,
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