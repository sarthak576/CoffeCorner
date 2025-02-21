import "./TestimonialCard.css";

export const TestimonialCard = (testimonial) => {
  const { text, userName, userJob, img, id } = testimonial;
  return `
    <div class="testimonial" data-id="${id}">
        <p class="testimonial__paragraph u-gray">${text}</p>
        <div class="testimonial__details">
            <h5 class="quintiary-title u-dark-yellow">${userName}</h5>
            <h3 class="tertiary-title u-gray">${userJob}</h3>
        </div>
        <img class="testimonial__user-img" src="./img/${img}.webp">
    </div>

`;
};
