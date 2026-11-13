const botonPantalla = document.getElementById("modo-exposicion");
if (botonPantalla) {
  const actualizarEtiqueta = () => {
    const activa = Boolean(document.fullscreenElement);
    botonPantalla.textContent = activa ? "Salir de pantalla completa ↙" : "Modo feria ⛶";
    botonPantalla.setAttribute("aria-label", activa ? "Salir de pantalla completa" : "Activar pantalla completa");
    botonPantalla.setAttribute("aria-pressed", String(activa));
  };
  botonPantalla.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else { botonPantalla.textContent = "Pantalla completa no disponible"; return; }
    } catch {
      botonPantalla.textContent = "Pantalla completa no disponible";
      return;
    }
    actualizarEtiqueta();
  });
  document.addEventListener("fullscreenchange", actualizarEtiqueta);
}
