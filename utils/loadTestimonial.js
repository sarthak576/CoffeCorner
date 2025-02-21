import { getTestimonial } from "./getTestimonial";
import { TestimonialCard } from "../components/TestmonialCard/TestimonialCard";

export const loadTestimonials = () => {
  const sliderBtns = document.querySelectorAll(".testimonials__arrow");
  const testimonialsContainer = document.querySelector(
    ".testimonials__container"
  );
  let dataId, currentTestimonial, nextTestimonial;

  const printTestimonial = () => {
    currentTestimonial.remove();
    testimonialsContainer.insertAdjacentHTML(
      "afterbegin",
      TestimonialCard(nextTestimonial.at(0))
    );
  };

  const selectTestimonial = (direction) => {
    currentTestimonial = document.querySelector(".testimonial");
    dataId = +currentTestimonial.dataset.id;

    if (direction === "right") {
      dataId++;
      nextTestimonial = getTestimonial(dataId);
      if (dataId > 3) return;
      console.log(dataId);

      printTestimonial();
    } else {
      dataId--;
      nextTestimonial = getTestimonial(dataId);
      if (dataId == 0) return;
      console.log(dataId);

      printTestimonial();
    }
  };

  sliderBtns.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("testimonials__arrow--left")) {
        selectTestimonial("left");
      } else {
        selectTestimonial("right");
      }
    });
  });
};
