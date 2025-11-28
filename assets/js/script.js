gsap.registerPlugin(ScrollTrigger);
let _descText = `With over 4 years of hands-on experience as a Frontend Developer, I specialize in crafting exceptional web applications using React and Node.js. My expertise lies in building intuitive user interfaces, architecting scalable solutions, and collaborating with cross-functional teams to deliver high-quality products. I excel at implementing modern best practices, optimizing performance, and ensuring accessibility and responsiveness across all devices. Skilled in React (including hooks, context, and advanced patterns), state management, and seamless integration with Node.js backends, I am passionate about delivering maintainable, future-proof solutions and continuously advancing my skill set to stay at the forefront of web technologies.`;

document.addEventListener("DOMContentLoaded", () => {
  // Hero animation
  gsap.to(".hero-anim", {
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  let isDarkMode = true;

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    
    if (isDarkMode) {
      themeIcon.classList.remove('ri-moon-line');
      themeIcon.classList.add('ri-sun-line');
    } else {
      themeIcon.classList.remove('ri-sun-line');
      themeIcon.classList.add('ri-moon-line');
    }
  });

  // Scroll to top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  // Use a simple user feedback (no mailto) since mailto is unreliable on many browsers
  // contactForm.addEventListener('submit', (e) => {
  //   e.preventDefault();

  //   // Simple validation (optional)
  //   const formData = new FormData(contactForm);
  //   const name = formData.get('name');
  //   const email = formData.get('email');
  //   const message = formData.get('message');

  //   // Here you could send an AJAX request to your backend (if you have one)
  //   // For now, just show a user-friendly message and reset form

  //   // Show a thank you message to the user
  //   const thankYouMsg = document.createElement('div');
  //   thankYouMsg.textContent = "Thank you for your message! I'll get back to you soon.";
  //   thankYouMsg.style.background = "#81C3D7";
  //   thankYouMsg.style.color = "#000";
  //   thankYouMsg.style.padding = "1em";
  //   thankYouMsg.style.borderRadius = "10px";
  //   thankYouMsg.style.marginTop = "1em";
  //   thankYouMsg.style.textAlign = "center";
  //   thankYouMsg.setAttribute('id', 'contact-thank-you');

  //   // Remove existing thank you message if any
  //   const prevMsg = document.querySelector('#contact-thank-you');
  //   if (prevMsg) prevMsg.remove();

  //   // Send mail to saranbrl35@gmail.com using EmailJS (client-side solution)
  //   // Please make sure to configure EmailJS on your account & in your HTML add user and service/template ids.
  //   // This code only runs if emailjs is loaded globally.

  //   // Optionally, show a spinner or disable button here

  //   if (window.emailjs) {
  //     emailjs.send(
  //       'service_jghwlng', // Replace with your EmailJS Service ID
  //       'template_0x6po1m', // Replace with your EmailJS Template ID
  //       {
  //         name: name,
  //         email: email,
  //         message: message
  //       },
  //       'KTdf5SnwKDO_90aY3' // Replace with your EmailJS Public key/User ID
  //     ).then(function(response) {
  //       // Success, do nothing, thankYouMsg already shown
  //     }, function(error) {
  //       thankYouMsg.textContent = "Message failed to send. Please email me directly at saranbrl35@gmail.com";
  //       thankYouMsg.style.background = "#f66";
  //       thankYouMsg.style.color = "#fff";
  //     });
  //   } else {
  //     // If emailjs not available, just show fallback
  //     thankYouMsg.textContent += " (Message not sent. Please email me at saranbrl35@gmail.com)";
  //     thankYouMsg.style.background = "#f66";
  //     thankYouMsg.style.color = "#fff";
  //   }

  //   contactForm.parentNode.appendChild(thankYouMsg);

  //   contactForm.reset();
  // });

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
    const lastCard = document.querySelector(".experience-card.isend");
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
          scale: index === (sections.length - 1)  ? 1.1 : 1,
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
