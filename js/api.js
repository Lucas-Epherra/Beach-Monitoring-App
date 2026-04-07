
/* llamada de datos externos */

export async function fetchWeather(lat,lon) {

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=wave_height`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      winddirection: data.current_weather.winddirection,
      waveHeight: data.hourly.wave_height[0],
    };
  } catch (error) {
    console.error("Error al obtener clima:", error);
  }
}