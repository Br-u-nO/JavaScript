const input_longitud = document.getElementById('longitud');
const globo = document.getElementById('valor_input');
const contrasenia = document.getElementById('contrasenia');
const simbolos = ['$','%','&','!','*','+','-','#'];
const btn = document.getElementById('generar');
const box_numeros = document.getElementById('numeros');
const box_simbolos = document.getElementById('simbolos');

document.addEventListener('DOMContentLoaded', function(){
    globo.innerHTML=input_longitud.value;
    moverGlobo();
})

input_longitud.addEventListener('input',function(){
    moverGlobo();
    globo.style.display = 'block'
})

input_longitud.addEventListener('mouseover',function(){
    globo.style.display='block';
})

input_longitud.addEventListener('mouseleave',function(){
    globo.style.display='none';
})

btn.addEventListener('click',function(){
    let str ='';
    for(let i=0;i<input_longitud.value;i++){
        str = crearContra(str);
    }
    contrasenia.innerHTML=str;
})

function moverGlobo(){
    const valor = input_longitud.value;
    globo.innerHTML= valor
    posicion = input_longitud.getBoundingClientRect();
    const porcentaje = ((valor * 100)/30)+(valor-40);
    globo.style.left = (Number(posicion.left) + porcentaje) + 'px';
    globo.style.top = posicion.top +20 +'px';
}

function crearContra(str){
    let letra = String.fromCharCode(Math.floor(Math.random()*26)+65);
    let tmn = Math.random();
    if(tmn<0.5){
        str+=letra.toLowerCase();
    }else{
        tmn = Math.random();
        if(box_simbolos.checked){
            if(tmn>0.7){
                letra = simbolos[Math.floor(Math.random()*simbolos.length)];
                console.log(letra)
            }
        }
        if(box_numeros.checked){
            if(tmn<0.3){
                letra = String.fromCharCode(Math.floor(Math.random()*10)+48);
            }
        }
        str+=letra;
    }
    return str;
}

