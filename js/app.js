import { fetchWeather } from "./api.js";
import { state, cities, setCity } from "./state.js";
import { getWindType, estimateWave, getSeaStatus } from "./utils.js";
import { renderDashboard, renderDashboardError } from "./ui.js";
import { startClock } from "./time.js";

/* funcion que usa el estado */

async function updateDashboard() {
  const { lat, lon } = cities[state.currentCity];

  const weather = await fetchWeather(lat, lon);
  if (!weather) {
    renderDashboardError();
    return;
  }

  const temp = weather.temperature;
  const wind = weather.windspeed;
  const winddirection = weather.winddirection;

  const windType = getWindType(winddirection);
  const wave = weather.waveHeight ?? estimateWave(wind);
  const status = getSeaStatus(wind, wave, windType);

  renderDashboard({ temp, wind, windType, wave, status });
}

function init() {
  const selector = document.getElementById("citySelector");

  selector.value = state.currentCity;

  selector.addEventListener("change", (e) => {
    setCity(e.target.value);
    updateDashboard();
  });

  updateDashboard();
  startClock();
}

init();
