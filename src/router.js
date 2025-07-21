// src/router.js
const routes = {};

export function registerRoute(path, component) {
  routes[path] = component;
}

function router() {
  const path = window.location.hash.replace('#', '') || '/';
  const view = routes[path];
  if (view) {
    document.getElementById('app').innerHTML = view();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
it 