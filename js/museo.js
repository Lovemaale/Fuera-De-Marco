const control = document.getElementById("control-comparacion");
const marco = document.getElementById("comparador-marco");
const texto = document.getElementById("texto-comparador");
const etiquetaArchivo = document.getElementById("etiqueta-archivo");
const etiquetaPantalla = document.getElementById("etiqueta-pantalla");
const lecturas = [
  "Solo archivo: ¿qué valores y jerarquías conserva esta imagen?",
  "El archivo ocupa más espacio. ¿Qué ideas parecen antiguas, pero aún se repiten?",
  "Mitad y mitad: nota qué imagen reclama tu atención primero.",
  "La pantalla ocupa más espacio. ¿Qué efectos tiene ver imágenes parecidas una y otra vez?",
  "Solo pantalla: ¿qué contexto desaparece cuando una imagen se vuelve tendencia?"
];
control.addEventListener("input", () => {
  marco.style.setProperty("--corte", `${control.value}%`);
  const valor = Number(control.value);
  etiquetaArchivo.hidden = valor > 92;
  etiquetaPantalla.hidden = valor < 8;
  const indice = Math.min(4, Math.floor(valor / 25));
  texto.textContent = lecturas[indice];
});
const fichas = {
  monumento: { titulo: "Ficha de archivo · El marco", texto: "Los monumentos conservan decisiones sobre qué recordar y a quién representar. Pregunta qué historias quedaron en los márgenes.", pregunta: "¿Qué cuerpos o historias te gustaría ver en el centro?" },
  pantallas: { titulo: "Ficha de archivo · La circulación", texto: "En las pantallas, la repetición y la recomendación pueden hacer que una preferencia parezca la única opción.", pregunta: "¿Qué cambia cuando el mismo ideal aparece muchas veces?" },
  miradas: { titulo: "Ficha de archivo · La mirada", texto: "Una imagen dirige la atención: organiza qué vemos primero y qué interpretamos como importante.", pregunta: "¿Quién eligió este encuadre y con qué intención?" }
};
document.querySelectorAll("[data-ficha]").forEach((boton) => {
  boton.addEventListener("click", () => {
    const ficha = fichas[boton.dataset.ficha];
    const panel = document.getElementById("ficha-archivo");
    document.querySelectorAll("[data-ficha]").forEach((pieza) => pieza.setAttribute("aria-expanded", String(pieza === boton && pieza.getAttribute("aria-expanded") !== "true")));
    if (boton.getAttribute("aria-expanded") === "true") {
      const titulo = document.createElement("h3"); titulo.textContent = ficha.titulo;
      const cuerpo = document.createElement("p"); cuerpo.textContent = ficha.texto;
      const pregunta = document.createElement("strong"); pregunta.textContent = ficha.pregunta;
      panel.replaceChildren(titulo, cuerpo, pregunta); panel.hidden = false;
    } else panel.hidden = true;
  });
});

