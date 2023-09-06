

document.addEventListener('DOMContentLoaded', function() {

  document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('unfold-title')) {
          
          const unfoldMenu = document.querySelectorAll(".unfold-title");
          unfoldMenu.forEach(otherTitle => {
              if (otherTitle !== event.target) {
                  otherTitle.classList.remove('unfold');
              }
          });

          event.target.classList.toggle('unfold');
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const myTitles = document.querySelectorAll(".myTitle");

    myTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Remove 'extra-class' from all elements except the clicked one
            myTitles.forEach(otherTitle => {
                if (otherTitle !== title) {
                    otherTitle.classList.remove('extra-class');
                }
            });

            // Toggle 'extra-class' on the clicked element
            this.classList.toggle('extra-class');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const uitklap = document.querySelectorAll(".uitklap-title");

//   uitklap.forEach(title => {
//       title.addEventListener('click', function() {
//           // // Remove 'extra-class' from all elements except the clicked one
//           // uitklap.forEach(otherTitle => {
//           //     if (otherTitle !== title) {
//           //         otherTitle.classList.remove('add-class');
//           //     }
//           // });

//           // Toggle 'extra-class' on the clicked element
//           this.classList.toggle('add-class');
//       });
//   });
// });



// gsap scroll functies
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// scroll expand section
// gsap.from(".line-2", {
//     scrollTrigger: {
//       trigger: ".section-scroll-expand",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%"
//     },
//     scaleX: 0, 
//     transformOrigin: "left center", 
//     ease: "none"
//   });

// gsap.to(".section-scroll-expand", {
//   clipPath: 'inset(0)',
//   scrollTrigger: {
//     trigger: ".scroll-column",
//     start: "center center",
//     end: "bottom bottom",
//     pin: false, // pin the trigger element
//     scrub: true, // link the image fade to the scroll
//     markers: true
//   }
// });


gsap.to(".section-scroll-expand", {
//   clipPath: "inset(50px calc((100vw - 1280px)/2) 50px calc((100vw - 1280px)/2) round 50px)",
  scrollTrigger: {
    trigger: ".scroll-column",
    start: "top center",
    end: "bottom 70%",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const maxWidth = window.innerWidth;
      const newWidth = 1260 + (maxWidth - 1180) * progress;
      const maxHeight = 800;
      const newHeight = maxHeight * (1 - progress);
      const imgScaleValue = 1 + progress;

      const clipPathValue = `inset(50px calc((100vw - ${newWidth}px)/2) 50px calc((100vw - ${newWidth}px)/2) round 50px)`;

      gsap.set(".section-scroll-expand", { clipPath: clipPathValue });
      gsap.set(".scroll-container img", { scale: imgScaleValue });
    },
//     markers: true,
  },
});



// horizontal scroll about page
let container = document.querySelector(".section-horizontal-scroll");
let tl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: container,
    start: "center center",
    // end: () => container.scrollWidth - document.documentElement.clientWidth
  },
  defaults: { ease: "none", duration: 1 }
});

tl.to(".horizontal-scroll-container", { x: () => -(800) }, 0)



// animation pinnen aan de bovenkant van scherm
  // const stickySection = document.getElementById('animation_section');
  // const iframe = document.getElementById('scrollable-iframe');

  // function toggleStickyAndScrolling() {
  //   const rect = stickySection.getBoundingClientRect();
  //   const isFullyInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //   if (isFullyInViewport) {
  //     stickySection.classList.add('pinned');
  //     iframe.setAttribute('scrolling', 'yes');
  //   } else {
  //     stickySection.classList.remove('pinned');
  //     iframe.setAttribute('scrolling', 'no');
  //   }
  // }

  // window.addEventListener('scroll', toggleStickyAndScrolling);


// code voor previous button op offerte pagina
// Find the input element with id 'gform_previous_button_3'
const inputElement = document.getElementById('gform_previous_button_3');

// Get the value attribute of the input element
const buttonText = inputElement.value;

// Update the innerHTML of the input element with the new structure
inputElement.innerHTML = `<span>${buttonText}</span>`;

