/* persistencia logica basica */

const cities = {
  Claromeco: { lat: -38.86, lon: -60.08 },
  Reta: { lat: -38.91, lon: -60.33 },
  Orense: { lat: -38.48, lon: -60.27 },
};

const state = {
  currentCity: "Claromeco",
};

/* funcion que usa el estado */

async function fetchWeather(city) {
  const { lat, lon } = cities[city];

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.current_weather;
  } catch (error) {
    console.error("Error al obtener clima:", error);
  }
}

async function updateDashboard() {
  const weather = await fetchWeather(state.currentCity);

  if (!weather) return;

  const temp = weather.temperature;
  const wind = weather.windspeed;

  // lógica simple de estado del mar (basado en viento)
  let status = "verde";
  if (wind > 20) status = "amarillo";
  if (wind > 35) status = "rojo";

  const icons = {
    verde: "🟢",
    amarillo: "🟡",
    rojo: "🔴",
  };

  const statusPlaya = document.getElementById("status");

  statusPlaya.textContent = `${icons[status]} ${status.toUpperCase()}`;
  statusPlaya.classList.remove("status-verde", "status-amarillo", "status-rojo");
  statusPlaya.classList.add(`status-${status}`);

  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("wind").textContent = wind + " km/h";
  document.getElementById("alert").textContent =
    status === "rojo" ? "Condiciones peligrosas" : "Sin alertas";
}

/* seleccionar ciudad */
function setCity(city) {
  state.currentCity = city;
  localStorage.setItem("city", city);
  updateDashboard();
}

/* cargar ciudad guardada */

const selector = document.getElementById("citySelector");

// ciudad inicial
const savedCity = localStorage.getItem("city") || "Claromeco";
selector.value = savedCity;
setCity(savedCity);

// cuando cambia la ciudad
selector.addEventListener("change", (e) => {
  setCity(e.target.value);
});

/* acá después podés: */

// - actualizar clima
// - refrescar datos

/* fecha en tiempo real */
function obtenerFecha() {
  const ahora = new Date();
  // Retorna solo la fecha: "3/4/2026"
  return ahora.toLocaleDateString("es-AR");
}

/* hora en tiempo real */

function obtenerHora() {
  const ahora = new Date();

  // Configuramos para que no use el formato de 12 horas (AM/PM)
  const opciones = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  // Obtenemos la hora y le concatenamos el "hs" al final
  const horaFormateada = ahora.toLocaleTimeString("es-AR", opciones);
  return horaFormateada;
}

function actualizarDOM() {
  document.getElementById("fecha").textContent = obtenerFecha();
  document.getElementById("reloj").textContent = obtenerHora();
}

// Ejecutar cada segundo
setInterval(actualizarDOM, 1000);
actualizarDOM();
