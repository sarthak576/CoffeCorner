import "./Button.css";

export const Button = (props) => {
  const { url, text, color } = props;

  return `
  <a class="btn btn--${color}" href="${url}" data-page="${text}" >${text}</a>
  `;
};
