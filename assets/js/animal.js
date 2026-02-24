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




// ------------button to top 



 
  const btn = document.getElementById("scrollTopBtn");
  const circle = document.querySelector(".progress-ring__circle");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setProgress(scrollPercent);

    /* show / hide */
    if (scrollTop > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }

    /* hide near footer */
    const footer = document.querySelector("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      if (footerTop < window.innerHeight) {
        btn.style.opacity = "0";
      } else {
        btn.style.opacity = "1";
      }
    }

    /* auto color change by scroll depth */
    if (scrollPercent < 33) {
      circle.style.stroke = "#00e5ff";
    } else if (scrollPercent < 66) {
      circle.style.stroke = "#ff9800";
    } else {
      circle.style.stroke = "#4caf50";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
