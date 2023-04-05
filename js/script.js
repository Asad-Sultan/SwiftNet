///////////////////////////////////////////////////////////
// Setting current year
///////////////////////////////////////////////////////////

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Making the header sticky
///////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
