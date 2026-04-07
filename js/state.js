/* persistencia logica basica */

export const cities = {
  Claromeco: { lat: -38.86, lon: -60.08 },
  Reta: { lat: -38.91, lon: -60.33 },
  Orense: { lat: -38.48, lon: -60.27 },
};

export const state = {
  currentCity: localStorage.getItem("city") || "Claromeco",
};

/* seleccionar ciudad */
export function setCity(city) {
  state.currentCity = city;
  localStorage.setItem("city", city);
}
