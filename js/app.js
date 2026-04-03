/* persistencia logica basica */

const selector = document.getElementById("citySelector");

/* cargar ciudad guardada */

const savedCity = localStorage.getItem("city");
if (savedCity) {
  selector.value = savedCity;
}

/* guardar cuando cambia */

selector.addEventListener("change", (e) => {
  const city = e.target.value;
  localStorage.setItem("city", city);

  console.log("ciudad seleccionada:", city);
});

// acá después podés:
// - actualizar clima
// - cambiar zonas
// - refrescar datos

/* hora en tiempo real */

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("timeNow").textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
