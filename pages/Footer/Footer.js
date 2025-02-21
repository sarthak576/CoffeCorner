import "./Footer.css";
import { aboutList, companyList, contactList } from "../../data/footerList";
import { FooterList } from "../../components/FooterList/FooterList";

export const Footer = () => `
    <footer>
        <div class="footer__form">
            <img class="footer__img-cup footer__img-cup--right hidden hidden-img-right " src="./img/cup-right.webp">
            <img class="footer__img-cup footer__img-cup--left hidden hidden-img-left" src="./img/cup-left.webp">
            <h2 class="secondary-title hidden hidden-text" style="--i:0">Subscribe to get the Latest News</h2>
            <h3 class="tertiary-title hidden hidden-text" style="--i:2">Don’t miss out on our latest news, updates, tips and special offers</h3>
            <form>
                <input type="email" placeholder="Enter your email">
                <input type="submit" value="Suscribe">
            </form>
        </div>
        <div class="footer__box">
            <div class="footer__details">
                <p>Neocafé</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div class="footer__socials">
                    <img src="./icon/facebook.svg">
                    <img src="./icon/instagram.svg">
                    <img src="./icon/youtube.svg">
                    <img src="./icon/twitter.svg">
                </div>
            </div>
            <div class="footer__list">
                <h4 class="quatertary-title">About</h4>
                ${FooterList(aboutList)}
            </div>
            <div class="footer__list">
                <h4 class="quatertary-title">Company</h4>
                ${FooterList(companyList)}
            </div>
            <div class="footer__list">
                <h4 class="quatertary-title">Contacts</h4>
                ${FooterList(contactList)}
            </div>
        </div>
    </footer>

`;
