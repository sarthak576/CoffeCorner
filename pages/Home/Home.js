import "./Home.css";
import { Nav } from "../../components/Nav/Nav";
import { Button } from "../../components/Button/Button";

export const Home = () => `
    <main>
        ${Nav()}
        <header class="header">
          <div class="header__text-box">
              <h3 class="tertiary-title hidden hidden-text" style="--i:0">We’ve got your morning covered with</h3>
              <h1 class="hidden hidden-text" style="--i:1">Coffee</h1>
              <p class="header__paragraph hidden hidden-text" style="--i:2">Kickstart your day with a perfect cup of coffee. Experience the richest flavors you've ever tasted. We bring the finest quality to our customers.</p>
              ${Button({ url: "#", text: "Order now", color: "yellow" })}
          </div>
        </header>
        
    </main>
    <section class="section section-home">
        <div class="intro">
            <div class="intro__text-box">
                <h2 class="secondary-title u-dark-yellow hidden hidden-text" style="--i=0">Discover the best coffee</h2>
                <p  class="u-gray hidden hidden-text" style="--i:2" >This coffee shop offers premium-quality coffee that boosts your energy and elevates your mood. A regular cup of coffee is good, but a truly great one is even better. There's no doubt you'll enjoy this coffee more than any you've ever tasted.</p>
                ${Button({ url: "#", text: "Learn more", color: "yellow" })}
            </div>
            <div class="intro__img">
                <img src="./img/img-3.webp">
            </div>
        </div>
    </section>


`;
