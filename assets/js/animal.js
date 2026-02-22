document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".Breeds");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const cardsPerClick = 6;
  let currentIndex = cardsPerClick;

  cards.forEach((card, index) => {
    if (index >= cardsPerClick) card.style.display = "none";
  });

  loadMoreBtn.addEventListener("click", () => {
    let shown = 0;
    for (let i = currentIndex; i < cards.length && shown < cardsPerClick; i++) {
      cards[i].style.display = "block";
      shown++;
    }
    currentIndex += shown;
    if (currentIndex >= cards.length) loadMoreBtn.style.display = "none";
  });
});


// for  hamburger section 

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const overlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

hamMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
