document.addEventListener("DOMContentLoaded", () => {
  // Preloader: показываем 5 секунд, затем переходим к контенту
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
      // Отображаем основной контент и логотип в шапке
      document.getElementById("content").style.display = "block";
      document.getElementById("headerLogo").style.display = "block";
    }, 500);
  }, 5000);

  // Анимация для прогресс-баров в дорожной карте
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.offsetWidth; // принудительный reflow
    bar.style.width = targetWidth;
  });

  // Language toggle
  let currentLanguage = "en";
  const langToggleBtn = document.getElementById("langToggleBtn");

  function updateLanguage() {
    if (currentLanguage === "en") {
      document.querySelectorAll(".lang-en").forEach(el => el.style.display = "");
      document.querySelectorAll(".lang-ru").forEach(el => el.style.display = "none");
      langToggleBtn.innerText = "RU";
    } else {
      document.querySelectorAll(".lang-en").forEach(el => el.style.display = "none");
      document.querySelectorAll(".lang-ru").forEach(el => el.style.display = "");
      langToggleBtn.innerText = "EN";
    }
  }

  // Устанавливаем язык по умолчанию (английский)
  updateLanguage();

  langToggleBtn.addEventListener("click", () => {
    currentLanguage = (currentLanguage === "en") ? "ru" : "en";
    document.body.classList.add("language-transition");
    setTimeout(() => {
      updateLanguage();
      document.body.classList.remove("language-transition");
    }, 300);
  });
});
