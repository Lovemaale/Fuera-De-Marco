const feed = document.getElementById("feed");
const capas = [
  { id: "sesgo", etiqueta: "Rayos X", titulo: "¿Qué activa?" },
  { id: "fuera", etiqueta: "Lo que falta", titulo: "Fuera del encuadre" },
  { id: "reencuadre", etiqueta: "Reformular", titulo: "Cambia el marco" }
];
function crearElemento(tag, clase, texto) {
  const elemento = document.createElement(tag);
  if (clase) elemento.className = clase;
  if (texto) elemento.textContent = texto;
  return elemento;
}
function mostrarCapa(panel, post, capa, indice, mensaje) {
  panel.replaceChildren();
  panel.setAttribute("aria-label", capa.titulo);
  panel.append(crearElemento("h3", "", capa.titulo));
  if (capa.id === "sesgo") {
    panel.append(crearElemento("p", "sesgo-etiqueta", post.sesgo), crearElemento("p", "", post.idea));
    const proceso = post.proceso;
    if (proceso) {
      const caja = crearElemento("aside", "proceso-cognitivo-feed");
      caja.append(crearElemento("strong", "", `Proceso cognitivo: ${proceso.nombre}`), crearElemento("p", "", proceso.detalle));
      panel.append(caja);
    }
    return;
  }
  if (capa.id === "fuera") {
    const lista = crearElemento("ul");
    post.queNoSeVe.forEach(detalle => lista.append(crearElemento("li", "", detalle)));
    panel.append(lista);
    return;
  }
  panel.append(crearElemento("p", "pregunta-choque", post.preguntas[0]));
  const salida = crearElemento("p", "reformulado");
  salida.hidden = true;
  salida.textContent = `«${post.reformulacion}»`;
  const boton = crearElemento("button", "boton-reencuadre", "Reformular este mensaje ↗");
  boton.type = "button";
  boton.setAttribute("aria-expanded", "false");
  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    salida.hidden = abierto;
    mensaje.textContent = abierto ? `«${post.texto}»` : `«${post.reformulacion}»`;
    boton.textContent = abierto ? "Reformular este mensaje ↗" : "Volver al mensaje ↶";
  });
  panel.append(boton, salida);
}
function crearPublicacion(post, indice) {
  const articulo = crearElemento("article", `post ${post.color}`);
  articulo.dataset.tipo = post.tipo;
  const panelId = `lectura-post-${indice}`;
  const disparador = crearElemento("button", "post-disparador");
  disparador.type = "button";
  disparador.setAttribute("aria-expanded", "false");
  disparador.setAttribute("aria-controls", panelId);
  disparador.append(crearElemento("span", "post-insignia", "Publicación ficticia · toca para activar rayos X"));
  const imagen = document.createElement("img");
  imagen.className = "post-imagen";
  imagen.src = post.imagen.src;
  imagen.alt = post.imagen.alt;
  imagen.loading = "lazy";
  disparador.append(imagen);
  const mensaje = crearElemento("span", "post-texto", `«${post.texto}»`);
  disparador.append(
    crearElemento("span", "post-cabecera", `${post.cuenta} · ${post.tipo}`),
    mensaje,
    crearElemento("span", "post-pista", "Abrir lectura crítica ↗")
  );
  const lectura = crearElemento("div", "post-lectura");
  lectura.id = panelId;
  lectura.hidden = true;
  const navegacionCapas = crearElemento("div", "post-capas");
  navegacionCapas.setAttribute("role", "group");
  navegacionCapas.setAttribute("aria-label", `Capas de análisis de ${post.cuenta}`);
  const panel = crearElemento("div", "post-panel");
  panel.setAttribute("aria-live", "polite");
  capas.forEach((capa, indiceCapa) => {
    const botonCapa = crearElemento("button", "post-capa", capa.etiqueta);
    botonCapa.type = "button";
    botonCapa.setAttribute("aria-pressed", String(indiceCapa === 0));
    botonCapa.addEventListener("click", () => {
      navegacionCapas.querySelectorAll(".post-capa").forEach(boton => boton.setAttribute("aria-pressed", String(boton === botonCapa)));
      mostrarCapa(panel, post, capa, indice, mensaje);
    });
    navegacionCapas.append(botonCapa);
  });
  mostrarCapa(panel, post, capas[0], indice, mensaje);
  lectura.append(navegacionCapas, panel);
  disparador.addEventListener("click", () => {
    const abierto = disparador.getAttribute("aria-expanded") === "true";
    disparador.setAttribute("aria-expanded", String(!abierto));
    lectura.hidden = abierto;
    articulo.classList.toggle("post-abierto", !abierto);
    disparador.querySelector(".post-pista").textContent = abierto ? "Abrir lectura crítica ↗" : "Cerrar rayos X ↗";
  });
  articulo.append(disparador, lectura);
  return articulo;
}
if (feed && Array.isArray(posts)) posts.forEach((post, indice) => feed.append(crearPublicacion(post, indice)));
document.querySelectorAll("[data-filtro-feed]").forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelectorAll("[data-filtro-feed]").forEach(filtro => filtro.setAttribute("aria-pressed", String(filtro === boton)));
    const tipo = boton.dataset.filtroFeed;
    document.querySelectorAll(".post").forEach(post => { post.hidden = tipo !== "todos" && post.dataset.tipo !== tipo; });
  });
});

