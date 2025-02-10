function toggleIntersection( observerEl, className, targetElement, ifFunc, elseFunc, ) {
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
// toggleIntersection( document.querySelector("[scrollWatcher]"), "", document.querySelector(".navHead"), (targetElement) => targetElement.classList.remove("navBlur"), (targetElement) => targetElement.classList.add("navBlur"), );
// console.log(document.querySelector('[scrollWatcher]'));

if (window.innerWidth < 600) {
  const swiper1 = new Swiper(".sec2Swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
  });
  const swiper2 = new Swiper(".sec3Swiper", {});
}


document.querySelector('.showNavBtn').addEventListener('click',function(){
  document.querySelector('.navLinks').classList.toggle('show');
});

