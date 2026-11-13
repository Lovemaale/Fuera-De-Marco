const dilemas = [
  { pregunta: "¿Cuándo el autocuidado se convierte en presión estética?", opciones: [
    { titulo: "Es una elección personal", argumento: "Las personas pueden elegir rutinas que disfrutan y encontrar bienestar en ellas.", tension: "La libertad también depende de qué opciones ofrece el entorno y de cuánto cuesta apartarse de la norma.", peso: 42 },
    { titulo: "El mercado influye", argumento: "La publicidad puede convertir inseguridades en necesidades para vender soluciones.", tension: "No toda elección está dictada por una marca: también hay gustos, prácticas culturales y experiencias propias.", peso: 68 },
    { titulo: "Depende del contexto", argumento: "Una misma práctica puede sentirse elegida, compartida o exigida según la situación.", tension: "El contexto no siempre es fácil de ver desde fuera; escuchar a la persona ayuda a entenderlo.", peso: 84 }
  ]},
  { pregunta: "¿Un filtro es solo un juego si lo usamos todos los días?", opciones: [
    { titulo: "Sigue siendo una elección", argumento: "Editar una imagen puede ser juego, arte o una forma de expresión.", tension: "La repetición también puede cambiar qué rostros nos parecen familiares o esperables.", peso: 48 },
    { titulo: "Puede estrechar la norma", argumento: "Los filtros que suavizan o ajustan rasgos pueden hacer que una apariencia editada parezca cotidiana.", tension: "El efecto no es igual para cada persona y cada uso; conviene mirar el contexto.", peso: 71 },
    { titulo: "Importa quién lo diseña", argumento: "Las plataformas deciden qué herramientas son fáciles de encontrar y qué imágenes se recomiendan.", tension: "Las personas también reinterpretan, parodian y transforman esas herramientas.", peso: 62 }
  ]},
  { pregunta: "¿Qué cambia cuando una campaña incluye cuerpos diversos?", opciones: [
    { titulo: "Amplía quién aparece", argumento: "Más personas pueden reconocerse en imágenes que antes las dejaban fuera.", tension: "Estar visible no siempre significa tener agencia o estar representado con respeto.", peso: 73 },
    { titulo: "Puede volverse estrategia", argumento: "La diversidad también puede usarse como sello comercial sin cambiar prácticas de fondo.", tension: "Una campaña puede tener efectos positivos y seguir respondiendo a intereses de marca.", peso: 67 },
    { titulo: "Depende de la representación", argumento: "Importan el contexto, quién cuenta la historia y si la imagen rompe o repite estereotipos.", tension: "No hay una imagen única capaz de representar toda una experiencia.", peso: 86 }
  ]}
];
let actual = 0;
function renderizarDilema() {
  const dilema = dilemas[actual];
  document.getElementById("dilema-contador").textContent = `DILEMA ${String(actual + 1).padStart(2,"0")} / ${dilemas.length}`;
  document.getElementById("totem-title").textContent = dilema.pregunta;
  const opciones = document.getElementById("posturas");
  opciones.replaceChildren();
  document.getElementById("resultado-postura").hidden = true;
  dilema.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");
    boton.type = "button"; boton.className = "postura"; boton.setAttribute("aria-pressed", "false");
    const numero = document.createElement("span"); numero.textContent = `0${indice + 1}`;
    const titulo = document.createElement("strong"); titulo.textContent = opcion.titulo;
    boton.append(numero, titulo);
    boton.addEventListener("click", () => mostrarPerspectiva(opcion, boton));
    opciones.append(boton);
  });
  document.getElementById("siguiente-dilema").textContent = actual === dilemas.length - 1 ? "Volver al inicio ↻" : "Siguiente dilema ↗";
}
function mostrarPerspectiva(opcion, seleccionado) {
  document.querySelectorAll(".postura").forEach((boton) => { boton.classList.toggle("seleccionada", boton === seleccionado); boton.setAttribute("aria-pressed", String(boton === seleccionado)); });
  const panel = document.getElementById("resultado-postura"); panel.replaceChildren();
  const titulo = document.createElement("h3"); titulo.textContent = `Una razón para esta postura: ${opcion.titulo}`;
  const argumento = document.createElement("p"); argumento.textContent = opcion.argumento;
  const tension = document.createElement("p"); tension.className = "tension-postura"; tension.textContent = `Otra pregunta para conversar: ${opcion.tension}`;
  const barra = document.createElement("div"); barra.className = "barra-perspectiva"; barra.setAttribute("role","img"); barra.setAttribute("aria-label", `Intensidad visual de esta perspectiva: ${opcion.peso} de 100, una metáfora y no un resultado de encuesta`);
  const relleno = document.createElement("span"); relleno.style.width = `${opcion.peso}%`; barra.append(relleno);
  panel.append(titulo, argumento, tension, barra); panel.hidden = false;
}
document.getElementById("siguiente-dilema").addEventListener("click", () => { actual = (actual + 1) % dilemas.length; renderizarDilema(); document.getElementById("totem-title").focus?.(); });
renderizarDilema();

