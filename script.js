document.addEventListener("DOMContentLoaded", () => {
  // Preloader: показываем 5 секунд, затем скрываем preloader и показываем контент
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 500);
  }, 5000);

  // Анимация для прогресс-баров в дорожной карте
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.offsetWidth; // Принудительный reflow
    bar.style.width = targetWidth;
  });

  // Инициализация particles.js для заднего плана
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
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

  // Инициализация 3D-карты Атласа с использованием Three.js (пример с вращающимся кубом)
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, document.getElementById("atlas3d-canvas").clientWidth / document.getElementById("atlas3d-canvas").clientHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("atlas3d-canvas"), antialias: true });
  renderer.setSize(document.getElementById("atlas3d-canvas").clientWidth, document.getElementById("atlas3d-canvas").clientHeight);

  // Пример геометрии (куб)
  let geometry = new THREE.BoxGeometry();
  let material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

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
