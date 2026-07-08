// ==========================================
// 1. VARIABLES GLOBALES Y CONFIGURACIÓN
// ==========================================
let imagenesActuales = [];
let indiceActual = 0;

const iconos = [
  `<svg viewBox="0 0 24 24" class="icon-svg"><path fill="currentColor" d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"/></svg>`,
  `<svg viewBox="0 0 24 24" class="icon-svg"><path fill="currentColor" d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"/></svg>`,
  `<svg viewBox="0 0 24 24" class="icon-svg"><path fill="currentColor" d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"/></svg>`,
  `<svg viewBox="0 0 24 24" class="icon-svg" ><path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3zm3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31"/></svg>`
];

const iconoBeneficios = {
  seguridad: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m-2-6h4q.425 0 .713-.288T15 15v-3q0-.425-.288-.712T14 11v-1q0-.825-.587-1.412T12 8t-1.412.588T10 10v1q-.425 0-.712.288T9 12v3q0 .425.288.713T10 16m1-5v-1q0-.425.288-.712T12 9t.713.288T13 10v1z"/></svg>`,
  atencion: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.51 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-4v8h4v1h-7v2h9V10c0-5.17-4.36-9.32-9.6-8.98"/></svg>`,
  calendario: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm7-6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18"/></svg>`,
  medalla: `<svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"/><path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"/><path d="m12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132c-.734-.078-1.101-.117-1.305-.241c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935c.52.22 1.099.032 1.373-.448c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076L18.544 12"/></g></svg>`
};

// ==========================================
// 2. PETICIONES Y CARGA DE DATOS (API / JSON)
// ==========================================
const cargarPaquetes = async () => {
  try {
    const respuesta = await fetch('packages.json');
    if (!respuesta.ok) throw new Error("Error al cargar packages.json");

    paquetesData = await respuesta.json();

    renderizarPaquetes(paquetesData);

  } catch (error) {
    console.error(error);
  }
};

const cargarCards = async () => {
  try {
    const respuesta = await fetch('cards.json');
    if (!respuesta.ok) throw new Error("Error al cargar cards.json");
    
    const data = await respuesta.json();
    renderCards(data);
  } catch (error) {
    console.error("Hubo un problema cargando las cards:", error);
  }
};

// Iniciar peticiones
cargarPaquetes();
cargarCards();

// ==========================================
// 3. FUNCIONES DE RENDERIZADO
// ==========================================
function renderizarPaquetes(paquetes) {
  const contenedor = document.getElementById('contenedor-paquetes');
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const formatearTexto = (texto) => {
    return texto.replace(/(\d+%|\$\d+)/g, '<strong class="resaltar-oro">$1</strong>')
                .replace(/(Todo incluido)/gi, '<strong class="resaltar-oro">$1</strong>');
  };

  const iconosCards = ["fas fa-umbrella-beach", "fas fa-water", "fas fa-bed", "fas fa-utensils", "fas fa-heart"];

  paquetes.forEach(paquete => {
    const divPrincipal = document.createElement('div');
divPrincipal.className = 'paquete-wrapper';
divPrincipal.id = paquete.id;

    divPrincipal.innerHTML = `
      <div class="paquete-superior">
        <div class="info-texto">
          <h2 class="paquete__nombre">${paquete.nombre}</h2>
          
          <span class="badge-ubicacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.004 11.73q.667 0 1.14-.475t.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472M12 21.019q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814"/></svg>
            ${paquete.pais.toUpperCase()}
          </span>
          
          <div class="copy-experiencia">
            <i class="fas fa-palm-tree"></i> ${paquete.copy}
          </div>

          <ul class="descripcion">
            ${paquete.descripcion.map((item, index) => `
              <li>
                <span class="icon">${iconos[index] || iconos[0]}</span>
                <span>${formatearTexto(item)}</span>
              </li>
            `).join("")}
          </ul>

          <div class="seccion-precio-cta">
            <div class="cuadro-precio">
              <div class="moneda">
                <span>Desde </span>
                <p>${paquete.precio.moneda}</p>
              </div>  
              <div class="monto_persona">
                <p class="monto">${paquete.precio.desde}</p>
              </div>
            </div>
            
            <div class="bloque-cta">
              <a href="cotiza.html" class="boton-oferta">COTIZA AHORA → <i class="fas fa-chevron-right"></i></a>
              <span class="nota-respuesta"> Respuesta inmediata y sin compromiso</span>
            </div>
          </div>
        </div>

       <div class="info-visual">
          <img src="${optimizarImagenPrincipal(paquete.imagenPrincipal)}" 
               alt="${paquete.alt}" 
               class="foto-main"
               fetchpriority="high"
               loading="eager"
               decoding="async"
               width="1000"
               height="">
          
          <div class="badge-descuento"></div>
          
          <div class="badge-hotel">
            <i class="fas fa-star text-gold"></i>
            <div class="hotel-details">
              <strong>${paquete.lugar}</strong>
            </div>
          </div>
        </div>
      </div>

      ${paquete.etiquetas ? `
        <div class="barra-beneficios">
          ${paquete.etiquetas.map(e => `
            <div class="beneficio">
              <div class="beneficio-icono" style="font-size: 24px;">${iconoBeneficios[e.icono] || ''}</div>
              <div class="beneficio-texto">
                <strong>${e.titulo}</strong>
                <span>${e.texto}</span>
              </div>
            </div>
          `).join("")}
        </div>
      ` : ''}

      <div class="beneficios-grid">
        ${paquete.beneficios.map((b, index) => `
          <div class="mini-card">
            <img src="${optimizarMiniatura(b.imagen)}" alt="${b.alt}" class="foto-mini" loading="lazy">
            <div class="card-info">
              <i class="${iconosCards[index] || 'fas fa-image'}"></i>
              <span>${b.titulo}</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
          
    contenedor.appendChild(divPrincipal);
  });
}

function renderCards(data) {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("card");

 div.innerHTML = `
  <img src="${optimizarMiniatura(card.imagen)}" 
       alt="${card.pais}" 
       loading="lazy"
       width="300"   height="400"  >
  <h2>${card.pais}</h2>
  <p>${card.lugar}</p>
`;

    div.addEventListener("click", () => {
      const paquete = document.getElementById(card.id);

      if (paquete) {
        paquete.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

    container.appendChild(div);
  });
}

// ==========================================
// 4. EVENTOS DE INTERFAZ Y NAVEGACIÓN
// ==========================================

// --- Header Transparente a Color ---
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (hero && header) {
    if (window.scrollY > hero.offsetHeight * 0.4) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// --- Botón Ir Arriba ---
const btnTop = document.getElementById("btnTop");
if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Botón Flotante WhatsApp ---
const btnWsp = document.querySelector(".whatsapp-float");
const footer = document.querySelector("#footer");

function updateWsp() {
  if (!btnWsp || !footer) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const footerTop = footer.offsetTop;
  const limit = footerTop - windowHeight - 20;

  if (scrollY < 150) {
    btnWsp.classList.remove("show");
  } else {
    btnWsp.classList.add("show");
    btnWsp.style.bottom = scrollY > limit ? `${scrollY - limit + 20}px` : "20px";
  }
}
window.addEventListener("scroll", updateWsp);
updateWsp(); // Ejecutar al inicio

// --- Modal de Galería de Imágenes (Event Delegation) ---
document.addEventListener("click", (e) => {
  const modal = document.getElementById("modalImagen");
  const img = document.getElementById("imgAmpliada");
  
  if (!modal || !img) return; // Seguridad si el modal no existe

  // ABRIR GALERÍA
  if (e.target.classList.contains("foto-mini")) {
    const wrapper = e.target.closest(".paquete-wrapper");
    if (!wrapper) return;

    const galeria = Array.from(wrapper.querySelectorAll(".foto-mini")).map(img => img.src);
    imagenesActuales = galeria;
    indiceActual = galeria.indexOf(e.target.src);

    img.src = galeria[indiceActual];
    modal.style.display = "flex";
  }

  // CERRAR GALERÍA
  if (e.target.classList.contains("cerrar") || e.target.id === "modalImagen") {
    modal.style.display = "none";
  }

  // SIGUIENTE
  if (e.target.classList.contains("btn-next") && imagenesActuales.length > 0) {
    indiceActual = (indiceActual + 1) % imagenesActuales.length;
    img.src = imagenesActuales[indiceActual];
  }

  // ANTERIOR
  if (e.target.classList.contains("btn-prev") && imagenesActuales.length > 0) {
    indiceActual = (indiceActual - 1 + imagenesActuales.length) % imagenesActuales.length;
    img.src = imagenesActuales[indiceActual];
  }
});

// --- Limpieza de WebSocket al cambiar de página ---
window.addEventListener('pagehide', () => {
  // Verificamos que 'socket' exista antes de cerrarlo
  if (typeof socket !== 'undefined' && socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Opcional: Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav__main a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const optimizarImagenPrincipal = (url) => {
  if (!url) return '';
  return url.replace('/upload/', '/upload/w_1000,f_auto,q_auto/');
};

// Úsala para el array de beneficios
const optimizarMiniatura =  (url) => {
  if (!url) return '';
  
  // Expresión regular que busca "/upload/" seguido opcionalmente de una versión (v123/)
  // y lo reemplaza inyectando los parámetros de transformación.
  return url.replace(/\/upload\/(v\d+\/)?/, `/upload/w_1000,f_auto,q_auto/$1`);
};



const heroImage = document.getElementById("heroImage");

heroImage.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});