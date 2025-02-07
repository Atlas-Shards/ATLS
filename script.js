document.addEventListener("DOMContentLoaded", () => {
  // Preloader: показываем 3 секунды, затем скрываем
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 500);
  }, 3000);

  // Инициализация particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 100 },
      "color": { "value": "#FFD700" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": { "enable": true, "distance": 150, "color": "#FFA726", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
      "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });

  // Счетчик посещений
  fetch('https://api.countapi.xyz/hit/atlas-shards-website/visits')
    .then(response => response.json())
    .then(data => {
      document.getElementById('visitorCount').textContent = data.value;
    });
});
