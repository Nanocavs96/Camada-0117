let count = 0
let cuadradoRandom
let time = 60 
var resultadocuenta = 0
const tiempo = setInterval(restarTiempo, 1000) // Agregado 
const cantPuntosGanados = 10 
const listaFrasesCorrectas = ["Dale Marito","Bien ahi Moco", "Metele colombia"] 
const listaFrasesIncorrectas = ["Casi Capecce", "En el año de la poronga vas a ganar", "Le erraste por ponerte en cheto"] 
const cuadrados = document.querySelectorAll('.cuadrado')  

const spanPuntos = document.getElementById('cantPuntos') 
const spanFrases = document.getElementById('frase') 
const spanTiempo = document.getElementById('tiempo') 
const tiempofinal = document.getElementById('tiempofinal') // Agregado 
const  imgvidas = document.getElementById('imgvidas') // Agregado
const contenedor_cuadrado = document.getElementById('contenedor-cuadrado') 

spanTiempo.textContent = time 


assignEventClick()

setInterval(changeCaraSeba, 550)
setInterval(ganaroperder, 1) // Agregado




function changeCaraSeba() {
    if(cuadradoRandom)
        cuadradoRandom.classList.remove("caraSeba")
    cuadradoRandom = cuadrados[Math.floor(Math.random() * 16)]
    cuadradoRandom.classList.add("caraSeba")
    
}

function assignEventClick(){
    cuadrados.forEach(x => {
        x.addEventListener('click', () => {
            if(x.id === cuadradoRandom.id){
                count = count + 1;
                spanPuntos.textContent = count;
                let randomFraseCorrecta = Math.floor(Math.random() * listaFrasesCorrectas.length)
                spanFrases.textContent = listaFrasesCorrectas[randomFraseCorrecta]
                cambiarColorCuadrados("green")
            } else if  ( count > 0 ) { 
                count = count - 1;
                spanPuntos.textContent = count;
                let randomFraseInCorrecta = Math.floor(Math.random() * listaFrasesIncorrectas.length)
                spanFrases.textContent = listaFrasesIncorrectas[randomFraseInCorrecta]
                cambiarColorCuadrados("red")
               
                
            } else { 
                cambiarColorCuadrados("red")
                let randomFraseInCorrecta = Math.floor(Math.random() * listaFrasesIncorrectas.length) // Agregado
                spanFrases.textContent = listaFrasesIncorrectas[randomFraseInCorrecta] // Agregado
                padre = imgvidas.parentNode; // Agregado
                padre.removeChild(imgvidas); // Agregado
                
              

            }
        })
    })
}



function cambiarColorCuadrados(color){
    cuadrados.forEach(x=>{
        x.style.border = "3px solid " + color
    }) 
}

function restarTiempo(){
    if(time > 0) 
    {
        time--;
        resultadocuenta++;
        spanTiempo.textContent = time + " Segundos "; // Agregado
        console.log(resultadocuenta) // Agregado
    }
}
//Agregado
function ganaroperder (){
    if(time === 0){
        contenedor_cuadrado.innerHTML = '';
        contenedor_cuadrado.style.backgroundImage = "url('../img/MarginalMesa\ de\ trabajo\ 2.jpg')"
        contenedor_cuadrado.style.backgroundSize = "cover"
        contenedor_cuadrado.style.backgroundRepeat = "no-repeat"
        spanFrases.textContent = " :Se quedaron sin carnaval negros"
    } else if (count === 10) {
        contenedor_cuadrado.innerHTML = '';
        contenedor_cuadrado.style.backgroundImage = "url('../Cumple/MarginalDios.jpg')"
        contenedor_cuadrado.style.backgroundSize = "cover"
        contenedor_cuadrado.style.backgroundRepeat = "no-repeat"
        clearInterval(tiempo); // Agregado
        spanFrases.textContent = "Feli cumpleaño Marito"
        tiempofinal.textContent =  resultadocuenta + " Segundos " // Agregado 
    }} 

