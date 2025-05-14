document.addEventListener("DOMContentLoaded", function () {
  // Swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Toggle nav
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ✅ Tutup nav ketika salah satu link diklik
  const navLinkEls = document.querySelectorAll(".nav-links a");
  navLinkEls.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});

