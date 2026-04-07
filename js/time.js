export function startClock() {
  function actualizarDOM() {
    const ahora = new Date();

    document.getElementById("fecha").textContent =
      ahora.toLocaleDateString("es-AR");

    document.getElementById("reloj").textContent =
      ahora.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
  }

  setInterval(actualizarDOM, 1000);
  actualizarDOM();
}