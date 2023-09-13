/* Sección para navbar sticky effect */
window.onscroll = () => toggleSticky();

const navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

const toggleSticky = () => {
    window.scrollY >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/* Sección para control de eventos */
const offcanvas_btnInicioR = document.querySelector("#offcBtnInicioR");
const offcanvas_btnRecetasR = document.querySelector("#offcBtnRecetasR");

offcanvas_btnInicioR.addEventListener("click", () => {
    window.location.href = "../index.html";
});
offcanvas_btnRecetasR.addEventListener("click", () => {
    window.location.href = "./recetas.html";
});