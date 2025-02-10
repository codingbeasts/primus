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
