const tarjetas = [
  { texto: "La tarjeta de publicación muestra la etiqueta «Publicidad».", categoria: "hecho", proceso: "Atención selectiva", explicacion: "Podemos revisar si la etiqueta y la mención aparecen en la publicación. Distinguir el dato observable de la interpretación ayuda a leer con más cuidado.", imagen: "assets/telefono.jpg", evidencia: "PISTA VISIBLE EN ESTA PUBLICACIÓN: etiqueta «Publicidad»" },
  { texto: "El rosa es el color más bonito para una portada.", categoria: "opinion", proceso: "Esquemas y creencias", explicacion: "«Más bonito» expresa una preferencia. Podemos debatirla, pero no verificarla como una verdad universal.", imagen: "assets/arte.png" },
  { texto: "Con esta crema borrarás toda imperfección en tres días.", categoria: "comercial", proceso: "Atención selectiva", explicacion: "Es una promesa de venta que merece evidencia. La frase llama defecto a una variación y vincula la solución con una compra.", imagen: "assets/consumismo.jpg" },
  { texto: "El pie de foto indica que la imagen fue tomada el 12 de agosto.", categoria: "hecho", proceso: "Metacognición", explicacion: "Podemos contar las tomas y comprobar la frase en el anuncio. Separar lo visible de lo que inferimos es una práctica de lectura crítica.", imagen: "assets/concepto%20general.jpg", evidencia: "PISTA VISIBLE EN ESTA PUBLICACIÓN: fecha «12 de agosto»" },
  { texto: "Esta imagen se ve más elegante con el filtro cálido.", categoria: "opinion", proceso: "Comparación y contexto", explicacion: "«Más elegante» es una valoración que depende del gusto y del contexto; la edición cambia lo que vemos, pero no fija una regla para todos.", imagen: "assets/estereotipos.jpg" },
  { texto: "Compra este suplemento y consigue la figura que todas quieren.", categoria: "comercial", proceso: "Esquemas y comparación social", explicacion: "La frase promete un resultado, crea una norma de grupo y propone una compra. Preguntar quién gana ayuda a descubrir el interés comercial.", imagen: "assets/emotividad.jpg" }
];
const nombres = { hecho: "Hecho comprobable", opinion: "Opinión subjetiva", comercial: "Suposición comercial" };
const ejemplos = [
  { titulo: "Comparación social", palabras: ["compar", "frente a", "mejor que", "peor que", "sus fotos", "como ella", "como ellos", "cuerpo que sueñas"] },
  { titulo: "Atención selectiva", palabras: ["perfect", "imperfección", "defecto", "borrar", "corregir", "disimular", "filtro", "secreto", "antes y después"] },
  { titulo: "Norma o esquema", palabras: ["todas deberíamos", "todos deberíamos", "deberías", "deberíamos", "si de verdad", "si realmente", "siempre", "nunca", "la talla que", "la belleza es"] },
  { titulo: "Presión comercial", palabras: ["compra", "vende", "producto", "marca", "rutina", "pasos", "tratamiento", "suplemento", "colección", "necesitas"] }
];
const $ = (id) => document.getElementById(id);
const afirmacionTexto = $("afirmacion-texto");
const afirmacion = $("afirmacion");
const respuesta = $("respuesta-juego");
const categorias = $("categorias");
let actual = 0;
let aciertos = 0;
let respondida = false;
function cargarTarjeta() {
  const tarjeta = tarjetas[actual];
  afirmacionTexto.textContent = `“${tarjeta.texto}”`;
  $("afirmacion-imagen").src = tarjeta.imagen;
  const evidencia = $("afirmacion-evidencia");
  evidencia.textContent = tarjeta.evidencia || "";
  evidencia.hidden = !tarjeta.evidencia;
  $("juego-contador").textContent = `TARJETA ${actual + 1} / ${tarjetas.length}`;
  $("juego-progreso").value = actual;
  respuesta.hidden = true;
  respuesta.replaceChildren();
  $("siguiente-tarjeta").hidden = true;
  categorias.querySelectorAll("button").forEach((boton) => { boton.disabled = false; boton.classList.remove("correcta", "incorrecta"); });
  afirmacion.setAttribute("aria-label", `Afirmación ${actual + 1}: ${tarjeta.texto}. Toca o activa para pasar a las categorías.`);
  respondida = false;
}
function responder(categoria) {
  if (respondida) return;
  respondida = true;
  const tarjeta = tarjetas[actual];
  const correcto = categoria === tarjeta.categoria;
  if (correcto) aciertos++;
  $("juego-progreso").value = actual + 1;
  const elegida = categorias.querySelector(`[data-categoria="${categoria}"]`);
  const correcta = categorias.querySelector(`[data-categoria="${tarjeta.categoria}"]`);
  elegida?.classList.add(correcto ? "correcta" : "incorrecta");
  correcta?.classList.add("correcta");
  categorias.querySelectorAll("button").forEach((boton) => { boton.disabled = true; });
  respuesta.replaceChildren();
  const sello = document.createElement("span");
  sello.className = correcto ? "sello-correcto" : "sello-revision";
  sello.textContent = correcto ? "¡CORRECTO! · MENSAJE DESMONTADO" : `OTRA PISTA · ${nombres[tarjeta.categoria]}`;
  const detalle = document.createElement("p");
  detalle.textContent = tarjeta.explicacion;
  const proceso = document.createElement("p");
  proceso.className = "proceso-juego";
  proceso.textContent = `Conexión cognitiva: ${tarjeta.proceso}.`;
  respuesta.append(sello, detalle, proceso);
  respuesta.hidden = false;
  $("siguiente-tarjeta").hidden = false;
  $("siguiente-tarjeta").textContent = actual === tarjetas.length - 1 ? "Ver cierre ↗" : "Siguiente afirmación ↗";
}
categorias.addEventListener("click", (evento) => { const boton = evento.target.closest("[data-categoria]"); if (boton) responder(boton.dataset.categoria); });
$("siguiente-tarjeta").addEventListener("click", () => {
  if (actual < tarjetas.length - 1) { actual++; cargarTarjeta(); afirmacion.focus(); }
  else { $("resultado-mensaje").textContent = `Clasificaste ${aciertos} de ${tarjetas.length}. El puntaje es solo una pausa para pensar: el contexto y la evidencia siguen importando.`; $("resultado-final").hidden = false; $("juego-progreso").value = tarjetas.length; $("reiniciar-juego").focus(); }
});
$("reiniciar-juego").addEventListener("click", () => { actual = 0; aciertos = 0; $("resultado-final").hidden = true; cargarTarjeta(); afirmacion.focus(); });
afirmacion.addEventListener("keydown", (evento) => { if ((evento.key === "Enter" || evento.key === " ") && !respondida) { evento.preventDefault(); categorias.querySelector("button:not(:disabled)")?.focus(); } });
afirmacion.addEventListener("click", () => { if (!respondida) categorias.querySelector("button:not(:disabled)")?.focus(); });
afirmacion.addEventListener("dragstart", (evento) => { evento.dataTransfer?.setData("text/plain", "afirmacion"); evento.dataTransfer.effectAllowed = "copy"; });
categorias.addEventListener("dragover", (evento) => evento.preventDefault());
categorias.addEventListener("drop", (evento) => { evento.preventDefault(); const boton = evento.target.closest("[data-categoria]"); if (boton) responder(boton.dataset.categoria); });
const entrada = $("texto-analizar");
const salida = $("resultado-clasificador");
entrada.addEventListener("input", () => { $("contador-caracteres").textContent = `${entrada.value.length} / 500`; });
document.querySelectorAll("[data-ejemplo]").forEach((boton) => { boton.addEventListener("click", () => { entrada.value = boton.dataset.ejemplo; entrada.dispatchEvent(new Event("input")); entrada.focus(); }); });
$("form-clasificador").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = entrada.value.trim().toLocaleLowerCase("es");
  const encontrados = ejemplos.map((grupo) => ({ ...grupo, pistas: grupo.palabras.filter((palabra) => texto.includes(palabra)) })).filter((grupo) => grupo.pistas.length);
  salida.replaceChildren();
  const titulo = document.createElement("h3");
  titulo.textContent = encontrados.length ? "Pistas detectadas" : "No encontré una pista clara";
  salida.append(titulo);
  if (!encontrados.length) { const p = document.createElement("p"); p.textContent = "Eso no demuestra que el mensaje sea neutral. Puede usar ironía, imágenes o palabras que estas reglas no reconocen. Pregunta quién habla, qué emoción activa y qué contexto falta."; salida.append(p); }
  else { const lista = document.createElement("ul"); encontrados.forEach((grupo) => { const item = document.createElement("li"); const strong = document.createElement("strong"); strong.textContent = grupo.titulo; item.append(strong, document.createTextNode(` · señales en el texto: ${grupo.pistas.map((p) => `“${p}”`).join(", ")}.`)); lista.append(item); }); salida.append(lista); }
  const contexto = document.createElement("p"); contexto.className = "limite-clasificador"; contexto.textContent = "Las pistas orientan una conversación; no prueban intención ni significado. La lectura final depende del contexto."; salida.append(contexto); salida.hidden = false;
});
cargarTarjeta();



