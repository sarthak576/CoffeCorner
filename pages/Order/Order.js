import "./Order.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { productsData } from "../../data/products/";

export const Order = () => {
  const cards = productsData.map((product, i) => ProductCard(product, i));

  return `
        <section class="section section-orders">
           <div class="orders">
               <h2 class="secondary-title u-dark-yellow  hidden hidden-text" style="--i:0">Enjoy a new blend of coffee style</h2>
               <h3 class="tertiary-title u-gray hidden hidden-text" style="--i:2">Explore all flavours of coffee with us. There is always a new cup worth experiencing</h3>
               <div id="cards-products" class="cards">
                  ${cards.join("")}
               </div>
           </div>    
           <img class="blast-img orders__blast-img hidden hidden-img-left" src="./img/blast-left.webp" style="--i:0"> 
        </section>

`;
};
