
document.addEventListener('astro:page-load', () => {
  const hamburger = document.querySelector(".hamburger");
  const { body } = document;
  hamburger?.addEventListener("click", () => {
    body.classList.toggle("open");
  });

  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/0a07eaf69b.js";
  script.defer = true;
  document.body.appendChild(script);

})
