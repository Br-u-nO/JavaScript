const input_pokemon = document.getElementById('pokemon');
const mitad1 = document.getElementById('mitad1');
const mitad2 = document.getElementById('mitad2');
const btn = document.getElementById('buscar');

document.addEventListener('DOMContentLoaded',function(){
    medidaContenedor();
})

input_pokemon.addEventListener('keydown',function(key){
    if(key.code === 'Enter'){
        const valor = input_pokemon.value;
        if(valor !== ''){
            if(info_act !==undefined){
                mitad2.removeChild(info_act);
                info_act = undefined;
            }  
        mostrarInfo(valor);
        }
    }
})

btn.addEventListener('click',function(){
    const valor = input_pokemon.value;
    if(valor !== ''){
        mitad2.innerHTML='';
        mostrarInfo(valor);
    }
})

function mostrarInfo(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const elem = document.createElement('div');
            elem.classList='info';
            elem.innerHTML=`
                <h2>${data.name.toUpperCase()}</h2>
                <h4>Habilidades:</h4>
                <ul id="habilidades"></ul>
            `

            for(let i=0;i<data.abilities.length;i++){
                const habilidad = document.createElement('li');
                habilidad.innerHTML=data.abilities[i].ability.name;
                
                elem.querySelector('#habilidades').appendChild(habilidad)
            }            
            mitad2.appendChild(elem);
            info_act = elem;
        })
        .catch(error => console.log('Error: '+ error))
}

function medidaContenedor(){
    const width_cont = document.getElementById('contenedor_principal').getBoundingClientRect();
    

    mitad1.style.width=width_cont.width/2 + 'px';
    mitad2.style.width=width_cont.width/2 + 'px';
}