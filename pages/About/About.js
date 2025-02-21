import "./About.css";
import { featuresData } from "../../data/features";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { Button } from "../../components/Button/Button";

export const About = () => {
  const cards = featuresData.map((feature, i) => FeatureCard(feature, i));
  return `
        <section class="section section-features">
          <div class="features">
            <h2 class="secondary-title u-dark-yellow  hidden hidden-text"style="--i:0">Why are we different?</h2>
            <h3 class="tertiary-title u-gray hidden hidden-text" style="--i:2">We don’just make your coffee, we make your day!</h3>
            <div id="cards-features" class="cards">
              ${cards.join("")}
            </div>
            <div class="features_cta">
              <h3 class="tertiary-title u-gray hidden hidden-text-next" style="--i:0">Great ideas start with great coffee, Lets help you achieve that</h3>
              <h5 class="quintiary-title u-dark-yellow hidden hidden-text-next"style="--i:1">Get started today.</h5>
              ${Button({ url: "#", text: "Join Us", color: "yellow" })}
            </div> 
          </div>    
          <img class="blast-img features__blast-img hidden hidden-img-right" src="./img/blast-right.webp" style="--i:0"> 
        </section>



        <section class="section section-cta">
          <div class="cta">
            <div class="cta__text-box">
                <h2 class="secondary-title u-white hidden hidden-text" style="--i=0">Get a chance to have an Amazing morning</h2>
                <p  class="u-white hidden hidden-text" style="--i:1">We are giving you are one time opportunity to experience a better life with coffee.</p>
                ${Button({ url: "#", text: "Order now", color: "yellow" })}
            </div>
            <div class="cta__img--2 hidden hidden-img-right" style="--i:0">
                <img src="./img/img-4.webp">
            </div>
            <div class="cta__img--1 hidden hidden-img-right" style="--i:2">
                <img src="./img/img-5.webp">
            </div>
          </div>
        </section>
    `;
};
