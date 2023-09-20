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
import { crearModal, createElementCustom } from "./elementos.js";
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

/* Seccion para zoom de imagenes */
const modalPasosRecetaBootstrap = new bootstrap.Modal("#modalPasosReceta", { keyboard: false });
const modalPasosReceta = document.querySelector("#modalPasosReceta");
const modalPasosRecetaBody = document.querySelector("#modalPasosRecetaBody");

window.addEventListener("click", (e) => {
    if (e.target.matches(".img-steps-recipe")){
        /* 
            let modalReceta está horrible, pero no se me ocurrió otra manera de seleccionar el modal padre
            de la receta ACTUAL, ya que si lo trato de acceder por id, este irá cambiando. Lo mismo con las
            clases.
        */
        let modalReceta = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (modalPasosRecetaBody.firstElementChild){
            modalPasosRecetaBody.removeChild(modalPasosRecetaBody.firstElementChild);
        }
        modalPasosRecetaBody.appendChild(createElementCustom("img", ["img-fluid"], "", {
            "id": e.target.alt,
            "src": e.target.src,
            "alt": e.target.alt
        }));
        modalPasosRecetaBootstrap.show(modalPasosReceta);
        modalReceta.classList.add("toggleZIndex");
        modalPasosReceta.addEventListener("hide.bs.modal", () => {
            modalReceta.classList.remove("toggleZIndex");
        });
    }
})