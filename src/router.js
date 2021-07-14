import { pathToRegex } from 'utils/regex';

let matchers;
let appContainerEl;
let mainContentEl;
let notFoundComponent;

const renderLayout = (appContainer, layout) => {
  appContainerEl = document.querySelector(appContainer);
  if (layout) {
    appContainerEl.innerHTML = layout.component();
    mainContentEl = document.querySelector(layout.main);
  } else {
    mainContentEl = appContainerEl;
  }
};

const addRoutes = (routes) => {
  matchers = routes.map((route) => ({
    path: pathToRegex(route.path),
    component: route.component,
  }));
};

/**
 * changes the current location
 * @param {string} url
 */
export const navigateTo = (url, currentPage = false) => {
  window.history.pushState(null, null, url);
  window.dispatchEvent(new Event('locationChange'));
  currentPage ? document.documentElement.scrollTo(0,0) : "";
};

const intersectLinks = () => {
  document.addEventListener('click', (event) => {
    for (let i = 0; i < event.path.length - 3; i++) {
      const element = event.path[i];
      if (typeof element.dataset?.link === 'string') {
        event.preventDefault();
        if (window.location.pathname !== element.pathname) {
          return navigateTo(element.href);
        }
      }
    }
  });
};

const matchRoutes = (pathname) => {
  for (const matcher of matchers) {
    const match = pathname.match(matcher.path);
    if (match) return { component: matcher.component, params: match.groups };
  }
  return false;
};

const renderPage = async () => {
  const { pathname } = window.location;
  if (pathname[pathname.length - 1] !== '/') return navigateTo(`${pathname}/`);
  const match = matchRoutes(pathname);
  if (!match) mainContentEl.innerHTML = await notFoundComponent();
  else {
    const { component } = match;
    if (component.beforeRender) await component.beforeRender();
    mainContentEl.innerHTML = await component();
    if (component.afterRender) await component.afterRender();
  }
};

export const init = ({ routes, appContainer, layout, notFound }) => {
  addRoutes(routes);
  renderLayout(appContainer, layout);
  notFoundComponent = notFound;
  intersectLinks();

  // events
  document.addEventListener('DOMContentLoaded', renderPage);
  window.addEventListener('locationChange', renderPage);
  window.addEventListener('popstate', renderPage);
};

/**
 * returns an object with url params
 * @returns {object} params
 */
export const getParams = () => {
  const { pathname } = window.location;
  const { params } = matchRoutes(pathname);
  return params || {};
};

export default {
  init,
  getParams,
  navigateTo,
};
