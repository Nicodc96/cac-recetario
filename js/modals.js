import { createElementCustom } from "./elementos.js"
/**
 * Array que contiene las funciones que generan el contenido necesario para las ventanas modales de cada receta, 
 * de orden 0 - N *(siendo N un número natural indeterminado)*
 */
const contenedorModales = [
    function(){ // 1
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow = createElementCustom("div", ["col", "d-flex", "justify-content-center"], "", {});
        const img = createElementCustom("img", ["img-top-modal"], "", {
            "width": "500px", 
            "height": "500px",
            "src": "../assets/budin-arandanos.webp",
            "alt": "budin de arandanos"
        });
        
        col_divRow.appendChild(img);
        divRow.appendChild(col_divRow);        
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow2 = createElementCustom("div", ["col", "d-flex", "gap-2"], "", {});
        let duracion = "50 minutos";
        let cantidad_porciones = 12;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12h3.5" />
            <path d="M12 7v5" />
            </svg>
            <p>${duracion}</p>
            </div>`;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>${cantidad_porciones} porciones</p>
        </div>`;
                
        divRow2.appendChild(col_divRow2);
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow3 = createElementCustom("div", ["col"], "", {});
        const h3 = createElementCustom("h3", [], "Ingredientes", {});        
        
        col_divRow3.appendChild(h3);
        col_divRow3.innerHTML += `
            <ul>
                <li>160gr de harina leudante</li>
                <li>100gr de manteca</li>
                <li>120gr de queso crema</li>
                <li>150gr de azúcar</li>
                <li>2 huevos</li>
                <li>1 cucharadita de escencia de vainilla</li>
                <li>1 ralladura de limón</li>
                <li>Glaseado a gusto</li>
                <li>1 taza de azúcar impalpable</li>
                <li>Jugo de 1/2 limón aproximadamente</li>
            </ul>`;
        divRow3.appendChild(col_divRow3);

        const divRow4 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow4 = createElementCustom("div", ["col"], "", {});
        col_divRow4.innerHTML += `
            <h4 class="text-center">Pasos a seguir</h4>
            <h5>Primer paso</h5>
            <p>Cremar azúcar, ralladura de limón, manteca pomada y queso crema. Agregar huevos de a uno por vez y luego harina tamizada.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/budin_paso1.webp" alt="receta_budin_paso1" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin_paso2.webp" alt="receta_budin_paso2" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin_paso3.webp" alt="receta_budin_paso3" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Segundo paso</h5>
            <p>Batir hasta lograr una crema. Sumar los arándanos limpios, secos y rociados con un poco de jugo de limón (el ácido del jugo del limón hace que luego no se forme esa aureola verde alrededor de los arándanos). Mezclar y poner dentro de la budinera previamente forrada la base con papel manteca. Esta budinera es de aproximadamente 25 x 10 cm.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/budin_paso4.webp" alt="receta_budin_paso4" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin_paso5.webp" alt="receta_budin_paso5" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin_paso6.webp" alt="receta_budin_paso6" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Tercer paso</h5>
            <p>Cocinar en horno pre-calentado a 180° por aproximadamente 45 minutos (controlar cocción). Una vez frío desmoldar y glasear. Para el glaseado mezclar azúcar impalpable con parte del jugo de limón, ir agregando poco a poco hasta lograr una mezcla fluida pero con consistencia. Decorar con arándanos frescos.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/budin_paso7.webp" alt="receta_budin_paso7" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin_paso8.webp" alt="receta_budin_paso8" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/budin-arandanos.webp" alt="receta_budin_paso_final" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
        `;
        divRow4.appendChild(col_divRow4);

        return [divRow, divRow2, divRow3, divRow4];
    },
    function(){ // 2
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow = createElementCustom("div", ["col", "d-flex", "justify-content-center"], "", {});
        const img = createElementCustom("img", ["img-top-modal"], "", {
            "width": "500px", 
            "height": "400px",
            "src": "../assets/alitas-fritas.webp",
            "alt": "alitasfritas"
        });      
        
        col_divRow.appendChild(img);
        divRow.appendChild(col_divRow);        
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow2 = createElementCustom("div", ["col", "d-flex", "gap-2"], "", {});
        let duracion = "40 minutos";
        let cantidad_porciones = 4;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12h3.5" />
            <path d="M12 7v5" />
            </svg>
            <p>${duracion}</p>
            </div>`;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>${cantidad_porciones} porciones</p>
        </div>`;
                
        divRow2.appendChild(col_divRow2);
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow3 = createElementCustom("div", ["col"], "", {});
        const h3 = createElementCustom("h3", [], "Ingredientes", {});        
        
        col_divRow3.appendChild(h3);
        col_divRow3.innerHTML += `
            <ul>
                <li>1Kg o 10 alitas de pollo</li>
                <li>1 huevo</li>
                <li>1 taza de leche entera</li>
                <li>1/2 taza de harina común 0000</li>
                <li>Cereal sin sabor o puré instantáneo para rebosar</li>
                <li>
                    1 Cucharada de:
                    <ul>
                        <li>Sal</li>
                        <li>Pimienta</li>
                        <li>Pimentón dulce</li>
                        <li>Comino</li>
                        <li>Orégano</li>
                    </ul>
                </li>
            </ul>`;
        divRow3.appendChild(col_divRow3);

        const divRow4 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow4 = createElementCustom("div", ["col"], "", {});
        col_divRow4.innerHTML += `
            <h4 class="text-center">Pasos a seguir</h4>
            <h5>Primer paso</h5>
            <p>Siempre que hago alitas, las hago hervir por lo menos 15 minutos. Es opcional pero haciendo esto sé que en el momento de freír van a estar a punto.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso1.webp" alt="receta_alitas_paso1" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Segundo paso</h5>
            <p>Agregamos lo seco primero, harina y los condimentos.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso2.webp" alt="receta_alitas_paso2" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/alitas_paso3.webp" alt="receta_alitas_paso2" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Tercer paso</h5>
            <p>En este paso lo húmedo el huevo y la leche. Luego, mezclar hasta que te quede la mezcla como en la segunda imagen.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso4.webp" alt="receta_alitas_paso3" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/alitas_paso5.webp" alt="receta_alitas_paso3" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Cuarto paso</h5>
            <p>En una fuente ponemos la harina y, en este caso no tenía cereal y coloqué puré instantáneo (puede hacer solo con harina no hay problema; la única diferencia entre el cereal y el puré instantáneo es lo crocante y quedan más sequitas las alitas)...</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso6.webp" alt="receta_alitas_paso4" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Quinto paso</h5>
            <p>...rebozamos y dejamos descansar en un freezer o congelador 20’ minutos.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso7.webp" alt="receta_alitas_paso5" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/alitas_paso8.webp" alt="receta_alitas_paso5" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Sexto paso</h5>
            <p>Luego de sacar las alitas del freezer, fritamos unos diez minutos o el punto que usted desee.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/alitas_paso9.webp" alt="receta_alitas_paso_final" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/alitas_paso10.webp" alt="receta_alitas_paso_final" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/alitas_paso11.webp" alt="receta_alitas_paso_final" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
        `;
        divRow4.appendChild(col_divRow4);

        return [divRow, divRow2, divRow3, divRow4];
    },
    function(){ // 3
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow = createElementCustom("div", ["col", "d-flex", "justify-content-center"], "", {});
        const img = createElementCustom("img", ["img-top-modal"], "", {
            "width": "500px", 
            "height": "500px",
            "src": "../assets/gramajo_paso4.webp",
            "alt": "revueltogramajo"
        });      
        
        col_divRow.appendChild(img);
        divRow.appendChild(col_divRow);        
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow2 = createElementCustom("div", ["col", "d-flex", "gap-2"], "", {});
        let duracion = "1h 15min";
        let cantidad_porciones = 4;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12h3.5" />
            <path d="M12 7v5" />
            </svg>
            <p>${duracion}</p>
            </div>`;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>${cantidad_porciones} porciones</p>
        </div>`;
                
        divRow2.appendChild(col_divRow2);
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow3 = createElementCustom("div", ["col"], "", {});
        const h3 = createElementCustom("h3", [], "Ingredientes", {});        
        
        col_divRow3.appendChild(h3);
        col_divRow3.innerHTML += `
            <ul>
                <li>1Kg de papas</li>
                <li>1/2 cebolla mediana o 1 cebolla de verdeo</li>
                <li>100gr de jamón cocido (york)</li>
                <li>3 huevos</li>
                <li>4 cucharaditas de crema de leche</li>
                <li>1/2 taza de arvejas en lata</li>
            </ul>`;
        divRow3.appendChild(col_divRow3);

        const divRow4 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow4 = createElementCustom("div", ["col"], "", {});
        col_divRow4.innerHTML += `
            <h4 class="text-center">Pasos a seguir</h4>
            <h5>Primer paso</h5>
            <p>Cortar las papas en bastón, fritar hasta cocinarlas, no dejar que se doren demasiado.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/gramajo_paso1.webp" alt="receta_gramajo_paso1" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Segundo paso</h5>
            <p>Rehogar la cebolla con un chorrito de aceite. Agregar el jamón cortado en tiras y las arvejas.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/gramajo_paso2.webp" alt="receta_gramajo_paso2" class="rounded img-steps-recipe" width="100px" height="100px" />
                </div>
            <h5>Tercer paso</h5>
            <p>En un bol mezclar los huevos con la crema ligeramente. Incorporar a la preparación anterior, junto con las papas fritas.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/gramajo_paso3.webp" alt="receta_gramajo_paso3" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Cuarto paso</h5>
            <p>Cocinar unos minutos más hasta que los huevos se cocinen. Servir y a disfrutar! 🤤</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/gramajo_paso4.webp" alt="receta_gramajo_paso_final" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
        `;
        divRow4.appendChild(col_divRow4);

        return [divRow, divRow2, divRow3, divRow4];
    },
    function(){ // 4
        const divRow = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow = createElementCustom("div", ["col", "d-flex", "justify-content-center"], "", {});
        const img = createElementCustom("img", ["img-top-modal"], "", {
            "width": "500px", 
            "height": "500px",
            "src": "../assets/fideoscremachampiñones_pasofinal.webp",
            "alt": "fideoscremachampiñones"
        });      
        
        col_divRow.appendChild(img);
        divRow.appendChild(col_divRow);        
        
        const divRow2 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow2 = createElementCustom("div", ["col", "d-flex", "gap-2"], "", {});
        let duracion = "25min";
        let cantidad_porciones = 4;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12h3.5" />
            <path d="M12 7v5" />
            </svg>
            <p>${duracion}</p>
            </div>`;
        col_divRow2.innerHTML += `
        <div class="d-flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>${cantidad_porciones} porciones</p>
        </div>`;
                
        divRow2.appendChild(col_divRow2);
        const divRow3 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow3 = createElementCustom("div", ["col"], "", {});
        const h3 = createElementCustom("h3", [], "Ingredientes", {});        
        
        col_divRow3.appendChild(h3);
        col_divRow3.innerHTML += `
            <ul>
                <li>1 cebolla grande picada en cubitos</li>
                <li>2 cucharadas de manteca</li>
                <li>200gr de jamón cocido (york)</li>
                <li>1 cubito de caldo de verdura</li>
                <li>1 taza o lata de champiñones congelados</li>
                <li>200cc de crema de leche</li>
                <li>1 paquete (500gr) de fideos secos a elección</li>
                <li>Sal y pimienta</li>
                <li>400cc de agua</li>
            </ul>`;
        divRow3.appendChild(col_divRow3);

        const divRow4 = createElementCustom("div", ["mb-3", "row"], "", {});
        const col_divRow4 = createElementCustom("div", ["col"], "", {});
        col_divRow4.innerHTML += `
            <h4 class="text-center">Pasos a seguir</h4>
            <h5>Primer paso</h5>
            <p>Saltear la cebolla en la manteca, agregar el jamón cocido y los champiñones.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/fideoscremachampiñones_paso1.webp" alt="receta_ficrecha_paso1" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/fideoscremachampiñones_paso1-2.webp" alt="receta_ficrecha_paso1-2" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/fideoscremachampiñones_paso1-3.webp" alt="receta_ficrecha_paso1-3" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Segundo paso</h5>
            <p>Agregar a la olla/sartén los fideos previamente hervidos. Luego agregar el caldo, seguido de pizca de sal y pimienta (ir probando). Agregar la crema, el agua y revolver.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/fideoscremachampiñones_paso2.webp" alt="receta_ficrecha_paso2" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/fideoscremachampiñones_paso2-2.webp" alt="receta_ficrecha_paso2-2" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/fideoscremachampiñones_paso2-3.webp" alt="receta_ficrecha_paso2-3" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
            <h5>Tercer paso</h5>
            <p>Cocinar a fuego medio bajo con ella tapada hasta que la pasta está en su punto (depende de cada pasta el tiempo). Es importante ir revolviendo cada tanto y controlar que no falte el líquido. Servir con queso rallado por encima.</p>
            <div class="d-flex justify-content-center gap-2 container-img-pasos">
                <img src="../assets/fideoscremachampiñones_paso3.webp" alt="receta_ficrecha_paso3" class="rounded img-steps-recipe" width="100px" height="100px" />
                <img src="../assets/fideoscremachampiñones_pasofinal.webp" alt="receta_ficrecha_pasofinal" class="rounded img-steps-recipe" width="100px" height="100px" />
            </div>
        `;
        divRow4.appendChild(col_divRow4);

        return [divRow, divRow2, divRow3, divRow4];
    },
    function(){ // 5
    }
]

export { contenedorModales };