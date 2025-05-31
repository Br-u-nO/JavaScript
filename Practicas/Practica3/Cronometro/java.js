
const btn_manejo = document.getElementById('manejo');
const btn_rest = document.getElementById('reset');
const manejo_img = document.getElementById('pausa');
const tiempo = document.getElementById('counter'); 
let timer = {
    hora:0,
    minutos:0,
    segundos:0,
    milisegundos:0
}
let prendido = false;
let intervalo;


btn_manejo.addEventListener('click',function(){
    if(!prendido){
        prendido = true;
        intervalo = setInterval(contar,10);
        
        btn_manejo.innerHTML=`
            <span class="icono">∥</span>Pausar
        `
    }else{
        prendido = false
        btn_manejo.innerHTML=`
            <span class="icono">▶</span>Renaudar
        `
        clearInterval(intervalo)
    }
})



btn_rest.addEventListener('click', function(){
    timer.hora = 0; timer.minutos=0; timer.segundos = 0; timer.milisegundos =0;
    tiempo.innerHTML=`${timer.hora}h ${timer.minutos}m ${timer.segundos}s`;
    prendido = false
    clearInterval(intervalo);
    btn_manejo.innerHTML=`
        <span class="icono">▶</span> Iniciar
    `
})

function contar(){
    if(timer.milisegundos<0.9){
        timer.milisegundos+=0.01;
    }else{
        timer.milisegundos=0;
        if(timer.segundos<59){
        timer.segundos++;
    }else{
        timer.segundos=0
        if(timer.minutos<59){
            timer.minutos++;
        }else{
            timer.minutos = 0;
            timer.hora++;
        }
    }
    }
    tiempo.innerHTML=`${timer.hora}h ${timer.minutos}m ${(timer.segundos + timer.milisegundos).toFixed(2)}s`;
}
