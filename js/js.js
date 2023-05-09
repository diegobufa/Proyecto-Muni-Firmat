document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
const fetchData = async () => {
  try {
    const res = await fetch("eventos.json");
    const data = await res.json();

    pintarEventos(data);
  } catch (error) {
    console.log(error);
  }
};

const cards = document.getElementById("cards");

const pintarEventos = (data) => {
  const template = document.querySelector("#template-eventos").content;
  const fragment = document.createDocumentFragment();

  data.forEach((evento) => {
    template.querySelector("img").setAttribute("src", evento.imagen);
    template.querySelector("h4").textContent = evento.nombre;
    template.querySelector("h5").textContent = evento.dia;
    template.querySelector("p").textContent = evento.semana;
    template.getElementById("mes").textContent = evento.mes;
    template.querySelector("h2").textContent = evento.localidad;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
