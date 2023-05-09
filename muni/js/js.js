document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json()
        pintarEventos(data);
    }catch(error){
        console.log(error)
    }
}

const eventosGrilla = document.getElementById("eventosGrilla");

const pintarEventos = (data) => {
    const template = document.getElementById("grillaEventos");
    const fragment = new DocumentFragment();

    data.forEach(evento =>{
        console.log(evento)
    })

}