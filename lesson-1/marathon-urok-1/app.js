function slidesFunction(slideActive = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[slideActive].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClass();
      slide.classList.add("active");
    });
  }

  function clearActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesFunction(2);
