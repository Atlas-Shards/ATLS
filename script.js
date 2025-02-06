document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
});
