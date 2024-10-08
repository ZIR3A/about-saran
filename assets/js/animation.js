const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});
const animElements = document.querySelectorAll(".anim-at");
animElements.forEach((element) => observer.observe(element));
