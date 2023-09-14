/* Sección para navbar sticky effect */
window.onscroll = () => toggleSticky();

const navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

const toggleSticky = () => {
    window.scrollY >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* ---------------------------------- */

/* Sección para control de eventos */
const offcanvas_btnInicioR = document.querySelector("#offcBtnInicioR");
const offcanvas_btnRecetasR = document.querySelector("#offcBtnRecetasR");

offcanvas_btnInicioR.addEventListener("click", () => {
    window.location.href = "../index.html";
});
offcanvas_btnRecetasR.addEventListener("click", () => {
    window.location.href = "./recetas.html";
});
/* ---------------------------------- */

/* Sección lógica para cards */
import { contenedorModales } from "./modals.js";
import { crearModal } from "./elementos.js";
const contenedorCardsRecetas = document.querySelector("#contenedorCardsR");

/*
    En las lineas 30 y 31 lo que hago es utilizar un div escrito en el HTML para
    anclar mis elementos creados dinámicamente. No es la manera más elegante ni reutilizable
    pero es temporal, hecho con este propósito para en el futuro ser reemplazado con métodos
    fetch o axios.
*/
contenedorCardsRecetas.appendChild(crearModal(1, contenedorModales[0](), "Budín con arándanos"));
contenedorCardsRecetas.appendChild(crearModal(2, contenedorModales[1](), "Alitas fritas super crujientes"));

/* ---------------------------------- */