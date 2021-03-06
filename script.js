const route = (event) =>{
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/TestPageGA4/404": "pages/404.html",
  "/TestPageGA4/": "pages/index.html",
  "/TestPageGA4/about": "pages/about.html",
  "/TestPageGA4/lorem": "pages/lorem.html",
  "/TestPageGA4/form": "pages/form.html",
  "/TestPageGA4/videos": "pages/videos.html",
  "/TestPageGA4/scroll": "pages/scroll.html",
};

const handleLocation = async () => {
  let path  = window.location.pathname;
  
  if (path == "/"){
    path = "/TestPageGA4/";
  }
  const route = routes[path] || routes["/TestPageGA4/404"];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
