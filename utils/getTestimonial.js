import { testimonialsData } from "../data/testimonials";

export const getTestimonial = (id) => {
  return testimonialsData.filter((el) => el.id == id);
};
