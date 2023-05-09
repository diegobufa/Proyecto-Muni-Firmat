(function(){
    let actualizarhora = function(){
        let fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let ampm;
    let  pHoras = document.getElementById("horas");
    let  pMinutos =document.getElementById("minutos");
    let  pSegundos = document.getElementById("segundos");
    let  pAmPm = document.getElementById("ampm");
    
    if(horas >= 12){
        horas = horas ;
        ampm = "PM";

    } else {
        ampm = "AM";

    }

    if(horas == 0){
        horas == "12"
    }
    pHoras.textContent =horas;
    pAmPm.textContent= ampm;

    if (minutos < 10){
        minutos = "0" + minutos;
        }

    if( segundos < 10){
        segundos = "0" + segundos;
    }
    pMinutos.textContent= minutos;
    pSegundos.textContent = segundos;
    }
     actualizarhora();
    let intervalo = setInterval(actualizarhora, 1000);
}());