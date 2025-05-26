const foto = document.getElementById('gato');
const btn = document.getElementById('parar');

function cambioDatos(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then (respuesta => respuesta.json())
    .then(datos => {
        foto.src=datos[0].url;
        console.log(datos)
    })
    .catch(error =>{
        alert("Errorrrrrr aaaaAAHAHAHHAHA")
    })

}
 
let intervalo = setInterval(cambioDatos,2000);
let frenado = false;

btn.addEventListener('click',()=>{
    if(frenado){
        intervalo=setInterval(cambioDatos,2000);
        frenado=false;
    }else{
        clearInterval(intervalo);
        frenado=true;
    }
})
