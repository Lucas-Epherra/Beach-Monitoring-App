export function renderDashboard(data) {
  const { temp, wind, windType, wave, status } = data;

  const icons = {
    verde: "🟢",
    amarillo: "🟡",
    rojo: "🔴",
  };

  const statusPlaya = document.getElementById("status");

  statusPlaya.textContent = `${icons[status]} ${status.toUpperCase()}`;
  statusPlaya.className = `status-${status}`;

  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("wind").textContent =
    wind + " km/h (" + windType + ")";
  document.getElementById("wave").textContent = wave + " m";
  document.getElementById("alert").textContent =
    status === "rojo" ? "Condiciones peligrosas" : "Sin alertas";
}

export function renderDashboardError() {
  document.getElementById("alert").textContent =
    "Error al cargar datos";
}