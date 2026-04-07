export function renderDashboard(data) {
  const { temp, wind, windType, wave, status } = data;

  const icons = {
    verde: "🟢",
    amarillo: "🟡",
    rojo: "🔴",
  };

  const statusPlaya = document.getElementById("status");

  statusPlaya.textContent = `${icons[status]} ${status.toUpperCase()}`;
  statusPlaya.classList.remove(
    "status-verde",
    "status-amarillo",
    "status-rojo",
  );
  statusPlaya.classList.add(`status-${status}`);
  const statusCard = document.querySelector(".main-status");

  statusCard.classList.remove("status-verde", "status-amarillo", "status-rojo");
  statusCard.classList.add(`status-${status}`);

  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("wind").textContent =
    wind + " km/h (" + windType + ")";
  document.getElementById("wave").textContent = wave + " m";


  // intentare hacer esto con un switch
  document.getElementById("alert").textContent =
    status === "rojo" ? "Condiciones peligrosas" : 
    status === "amarillo" ? "Riesgos Moderados":"Sin Alertas";
}

export function renderDashboardError() {
  document.getElementById("alert").textContent = "Error al cargar datos";
}
