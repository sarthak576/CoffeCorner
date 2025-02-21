import "./style.css";
import { Home } from "../pages/Home/Home";
import { Order } from "../pages/Order/Order";
import { About } from "../pages/About/About";
import { Testimonial } from "../pages/Testimonial/Testimonial";
import { Footer } from "../pages/Footer/Footer";
import { observeElement } from "../utils/observer.Elements";
import { loadTestimonials } from "../utils/loadTestimonial";

const app = document.querySelector("#app");

app.innerHTML = `
    ${Home()}
    ${Order()}
    ${About()}
    ${Testimonial()}
    ${Footer()}
`;

const elementsToObserve = [
  {
    container: document.querySelector(".header"),
    items: document.querySelectorAll(".header .hidden-text"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".section-home"),
    items: document.querySelectorAll(".section-home .hidden-text"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".section-orders"),
    items: document.querySelectorAll(
      ".orders__blast-img.hidden-img-left, .section-orders .hidden-text"
    ),
    threshold: 0.3,
  },
  {
    container: document.querySelector("#cards-products"),
    items: document.querySelectorAll(".product-card.hidden-img-right"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".section-features"),
    items: document.querySelectorAll(
      ".features__blast-img.hidden-img-right, .section-features .hidden-text"
    ),
    threshold: 0.3,
  },
  {
    container: document.querySelector("#cards-features"),
    items: document.querySelectorAll(".feature-card.hidden-img-left"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".features_cta"),
    items: document.querySelectorAll(".features_cta > .hidden-text-next"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".section-cta"),
    items: document.querySelectorAll(
      ".section-cta .hidden-text, .section-cta .hidden-img-right"
    ),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".testimonials"),
    items: document.querySelectorAll(
      ".testimonials .hidden-text, .testimonials .hidden-img-right"
    ),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".testimonials__arrows"),
    items: document.querySelectorAll(".testimonials .hidden-img-left"),
    threshold: 0.3,
  },
  {
    container: document.querySelector(".footer__form"),
    items: document.querySelectorAll(
      ".footer__form .hidden-text, .footer__form .hidden-img-right, .footer__form .hidden-img-left"
    ),
    threshold: 0.3,
  },
];

elementsToObserve.forEach(({ container, items, threshold }) => {
  if (container) {
    observeElement(container, items, { root: null, threshold });
  }
});

loadTestimonials();
