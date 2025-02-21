import "./FooterList.css";

export const FooterList = (list) => {
  let listItems = "";

  for (let i = 0; i < list.length; i++) {
    listItems += `<li><a href="${list[i].url}">${list[i].name}</a></li>`;
  }

  return `
        <ul>
            ${listItems}
        </ul>
        `;
};
