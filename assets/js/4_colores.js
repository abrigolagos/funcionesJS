// Punto 3.2 – Al hacer clic, cada div cambia a negro
const ids = ["azul", "rojo", "verde", "amarillo"];
ids.forEach(id => {
  const div = document.getElementById(id);
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
});

// Punto 3.3 – Variable global y teclas a, s, d
let colorGlobal = "";

const keyDiv = document.getElementById("key");

document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  if (key === "a") {
    colorGlobal = "pink";
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (key === "s") {
    colorGlobal = "orange";
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (key === "d") {
    colorGlobal = "skyblue";
    keyDiv.style.backgroundColor = colorGlobal;
  }

  // Punto 3.4 – Crear nuevo div con colores q, w, e
  else if (["q", "w", "e"].includes(key)) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.marginTop = "1rem";

    if (key === "q") {
      nuevoDiv.style.backgroundColor = "purple";
    } else if (key === "w") {
      nuevoDiv.style.backgroundColor = "gray";
    } else if (key === "e") {
      nuevoDiv.style.backgroundColor = "saddleBrown";
    }

    document.getElementById("teclas").appendChild(nuevoDiv);
  }
});
