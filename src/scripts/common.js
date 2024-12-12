
document.addEventListener('astro:page-load', () => {
  const hamburger = document.querySelector(".hamburger");
  const { body } = document;
  hamburger?.addEventListener("click", () => {
    body.classList.toggle("open");
  });
})
