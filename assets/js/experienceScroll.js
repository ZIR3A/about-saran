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