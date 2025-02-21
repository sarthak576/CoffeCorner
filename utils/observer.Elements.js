export const observeElement = function (container, items, options) {
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      items.forEach((item) => {
        item.classList.add("show");
      });
      observer.disconnect();
    }
  }, options);

  observer.observe(container);
};
