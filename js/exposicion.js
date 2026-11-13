const botonEntrada = document.getElementById("abrir-exposicion");
const salas = document.getElementById("salas");

if (botonEntrada && salas) {
  botonEntrada.addEventListener("click", () => {
    document.body.classList.add("exposicion-abierta");
    botonEntrada.setAttribute("aria-expanded", "true");
    const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    salas.scrollIntoView({ behavior: movimientoReducido ? "auto" : "smooth", block: "start" });
    window.setTimeout(() => {
      salas.querySelector("a")?.focus({ preventScroll: true });
    }, 450);
  });
}
