
function scrollProjectContent() {
  const _scrollContainer = document.querySelector("#section-four");
  const _scrollContent = gsap.utils.toArray(".pro-container");
  let _mainWIdth = window.innerWidth
  let _containerScrollWidth = _scrollContainer.scrollWidth
  if (_mainWIdth > 960) {
    function getScrollWidth() {
      return ((_containerScrollWidth) - _mainWIdth) + 42
    }
    gsap.from(_scrollContent, {
      x: getScrollWidth() * -1,
      ease: "none",
      scrollTrigger: {
        trigger: "#section-four",
        start: "top 5%",
        pin: true,
        scrub: true,
        end: getScrollWidth() + 1000,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // markers: true
      }
    })
  }
}

scrollProjectContent();
var onresize = function () {
  scrollProjectContent();
}
window.addEventListener("resize", onresize);