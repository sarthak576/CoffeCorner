import "./Testimonial.css";
import { TestimonialCard } from "../../components/TestmonialCard/TestimonialCard";
import { getTestimonial } from "../../utils/getTestimonial";

export const Testimonial = () => {
  const testimonial = getTestimonial(1);

  return `
    <section class="section section-testimonials">
        <div class="testimonials">
            <h2 class="secondary-title u-dark-yellow hidden hidden-text "style="--i:0">Our coffee perfection feedback</h2>
            <h3 class="tertiary-title u-gray hidden hidden-text" style="--i:2">Our customers has amazing things to say about us</h3>
            <div class="testimonials__container">  
               ${TestimonialCard(testimonial.at(0))}
                <img class="testimonials__virgol-img" src="./icon/virgol.svg">
                <div class="testimonials__arrows">
                    <button class="testimonials__arrow testimonials__arrow--left">
                        <img src="./icon/arrow-l.svg">
                    </button>
                    <button class="testimonials__arrow testimonials__arrow--right">
                        <img src="./icon/arrow-r.svg">
                    </button>
                </div>
            </div>
             <img class="blast-img testimonials__blast-img--right hidden hidden-img-right" src="./img/blast-right.webp" style="--i:0"> 
             <img class="blast-img testimonials__blast-img--left hidden hidden-img-left" src="./img/blast-left-up.webp" style="--i:1"> 
        </div>
    </section>
    `;
};
