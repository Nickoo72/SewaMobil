document.addEventListener("DOMContentLoaded", () => {
  const heroBg = document.querySelector(".hero-bg");
  const heroBgNext = document.querySelector(".hero-bg-next");

  const images = [
    "img/tugujogja.jpg",
    "img/jojga1.jpg",
    "img/jogja2.jpg"
  ];

  let current = 0;
  heroBg.style.backgroundImage = `url(${images[current]})`;
  heroBgNext.style.backgroundImage = `url(${images[(current + 1) % images.length]})`;

  function slideNext() {
    const nextIndex = (current + 1) % images.length;

    // siapkan background berikut
    heroBgNext.style.backgroundImage = `url(${images[nextIndex]})`;
    heroBgNext.style.transform = "translateX(100%)";

    // jalankan animasi
    requestAnimationFrame(() => {
      heroBgNext.style.transition = "transform 1s ease-in-out";
      heroBg.style.transition = "transform 1s ease-in-out";

      heroBgNext.style.transform = "translateX(0)";
      heroBg.style.transform = "translateX(-100%)";
    });

    // setelah animasi selesai, tukar posisi
    setTimeout(() => {
      heroBg.style.transition = "none";
      heroBgNext.style.transition = "none";

      heroBg.style.transform = "translateX(0)";
      heroBgNext.style.transform = "translateX(100%)";

      heroBg.style.backgroundImage = `url(${images[nextIndex]})`;
      current = nextIndex;
    }, 1000);
  }

  setInterval(slideNext, 4000);
});


//animasi masuk card
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // biar animasi cuma sekali
    }
  });
}, { threshold: 0.50 }); // 50% elemen terlihat baru animasi jalan

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
