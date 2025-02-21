import "./FeatureCard.css";

export const FeatureCard = (obj, delay) => {
  const { icon, title, paragraph } = obj;

  return `
        <div class="feature-card hidden hidden-img-left" style="--i:${delay}" >
            <img class="" src="./icon/${icon}.svg" >
            <div class="feature-card__details">
                <p class="feature-card__title u-dark-yellow">${title}</p>
                <p class="feature-card__paragraph u-gray">${paragraph}</p>
            </div>
        </div>

`;
};
