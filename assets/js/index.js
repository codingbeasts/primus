function toggleIntersection( observerEl, className, targetElement, ifFunc, elseFunc) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        console.log("Element entered the viewport");
        ifFunc(targetElement, className);
      } else {
        console.log("Element exited the viewport");
        elseFunc(targetElement, className);
      }
    });
  });
  observer.observe(observerEl);
}

function startAnim(){
const animatedAll = document.querySelectorAll('.animated');
// console.log(animatedAll);
animatedAll.forEach((el)=>{
  toggleIntersection( el, "", el, (targetElement) => targetElement.classList.add("fadeInUp"), (targetElement) => targetElement.classList.remove("fadeInUp"));
});
}
// toggleIntersection( document.querySelector("[scrollWatcher]"), "", document.querySelector(".navHead"), (targetElement) => targetElement.classList.remove("navBlur"), (targetElement) => targetElement.classList.add("navBlur"), );
// console.log(document.querySelector('[scrollWatcher]'));

// if (window.innerWidth < 600) {
//   const swiper1 = new Swiper(".sec2Swiper", {
//     spaceBetween: 0,
//     slidesPerView: 1,
//   });
//   const swiper2 = new Swiper(".sec3Swiper", {});
// }


let swiper1, swiper2;

function initSwiper() {
  if (window.innerWidth < 600) {
    if (!swiper1) {
      swiper1 = new Swiper(".sec2Swiper", {
        spaceBetween: 0,
        slidesPerView: 1,
      });
    }

    if (!swiper2) {
      swiper2 = new Swiper(".sec3Swiper", {});
    }
  } else {
    // Destroy Swiper instances if they exist
    if (swiper1) {
      swiper1.destroy(true, true);
      swiper1 = null;
    }
    if (swiper2) {
      swiper2.destroy(true, true);
      swiper2 = null;
    }
  }
}

// Initialize Swiper on page load
initSwiper();

// Reinitialize on window resize
window.addEventListener("resize", initSwiper);
window.addEventListener('load',startAnim);
window.addEventListener('resize',()=>{
if(window.innerWidth >= 1200){
  startAnim();
}
});



document.querySelector('.showNavBtn').addEventListener('click',function(){
  document.querySelector('.navLinks').classList.toggle('show');
});

