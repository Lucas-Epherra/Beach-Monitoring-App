// logica pura


//obtener direccion del viento
export function getWindType(deg) {
  // aproximado:
  // 90° = este (mar → tierra) → ONshore
  // 270° = oeste (tierra → mar) → OFFshore
  if (deg >= 45 && deg <= 135) return "viento de mar";
  if (deg >= 225 && deg <= 315) return "viento de tierra";
  return "viento cruzado"; // cruzado
}

// obtener altura estimada de la ola
export function estimateWave(wind) {
  if (wind < 10) return 0.5;
  if (wind < 20) return 1.0;
  if (wind < 30) return 1.8;
  return 2.8;
}

// con el viento y la ola me brinda el estado del mar
export function getSeaStatus(wind, wave, windType) {
  if (wind > 25 || wave > 1.5) return "rojo";

  if (windType === "onshore" && wind > 20) return "rojo";

  if (wind > 15 || wave > 1) return "amarillo";

  return "verde";
}