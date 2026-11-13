const botonesFrase = [...document.querySelectorAll(".frases-manifiesto button")];
const frase = document.getElementById("huella-frase");
const pared = document.getElementById("pared-manifiesto");
let seleccion = botonesFrase[0].textContent;
let huellas = 0;
botonesFrase.forEach((boton) => boton.addEventListener("click", () => {
  botonesFrase.forEach((otro) => otro.setAttribute("aria-pressed", String(otro === boton)));
  seleccion = boton.textContent;
  frase.textContent = seleccion;
}));
document.getElementById("dejar-huella").addEventListener("click", () => {
  huellas++;
  const marca = document.createElement("span");
  marca.className = "marca-huella";
  marca.textContent = seleccion;
  marca.style.setProperty("--giro", `${(Math.random() * 8 - 4).toFixed(1)}deg`);
  pared.append(marca);
  document.getElementById("contador-huellas").textContent = `${huellas} ${huellas === 1 ? "huella" : "huellas"} en esta visita`;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  marca.scrollIntoView({ behavior, block: "nearest" });
});

