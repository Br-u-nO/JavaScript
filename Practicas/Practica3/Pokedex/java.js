const input_pokemon = document.getElementById('pokemon');
const mitad1 = document.getElementById('mitad1');
const mitad2 = document.getElementById('mitad2');
const btn = document.getElementById('buscar');
const img = document.getElementById('imagen');
const flechas = document.querySelectorAll('.flecha');
const audio = document.getElementById('poke_sound');
const logo_sonido = document.getElementById('icono_sonido');
let foto = undefined;
let indice;
let imagenes = [];

document.addEventListener('DOMContentLoaded',function(){
    medidaContenedor();
})

input_pokemon.addEventListener('keydown',function(key){
    if(key.code === 'Enter'){
        const valor = input_pokemon.value;
        if(valor !== ''){
            if(foto !== undefined){
                img.removeChild(foto);
            }
            mitad2.innerHTML=''; 
            mostrarInfo(valor);
        }
    }
})

btn.addEventListener('click',function(){
    const valor = input_pokemon.value;
    if(valor !== ''){
        if(foto !== undefined){
            img.removeChild(foto);
        }
        mitad2.innerHTML=''; 
        mostrarInfo(valor);
    }
})

function mostrarInfo(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res => res.json())
        .then(data =>{
            const elem = document.createElement('div');
            elem.classList='info';
            elem.innerHTML=`
                <h2>${data.name.toUpperCase()}</h2>
                <h4>Habilidades:</h4>
                <ul id="habilidades"></ul>
                <div id="juegos"></div>
                <h4>Tipos:</h4>
                <h5 id="tipos"></h5>
                <h4>Estadisticas:</h4>
                <ul>
                    <li>Vida: ${data.stats[0].base_stat}</li>
                    <li>Ataque: ${data.stats[1].base_stat}</li>
                    <li>Defensa: ${data.stats[2].base_stat}</li>
                    <li>Ataque Especial: ${data.stats[3].base_stat}</li>
                    <li>Defensa Especial: ${data.stats[4].base_stat}</li>
                    <li>Velocidad: ${data.stats[5].base_stat}</li>
                </ul>
            `
            cargarFotos(data)
            cargarHabilidades(data,elem)
            cargarTipos(data,elem)
            audio.src = data.cries.latest;

            mitad2.appendChild(elem);
        })
        .catch(error =>{ 
            console.log('Error: '+ error) 
            const msj_mal = document.createElement('h1');
            msj_mal.innerHTML = `No Conocemos a "${input_pokemon.value}"`
            msj_mal.style=`
                text-align:center;
            `
            foto = undefined;
            mitad2.appendChild(msj_mal)
        })
}

function cargarFotos(data){
    imagenes = data.sprites;
    imagenes = [imagenes.front_default, imagenes.back_default,
                imagenes.front_female,imagenes.back_female,
                imagenes.front_shiny,imagenes.back_shiny,
                imagenes.front_shiny_female,imagenes.back_shiny_female,
    ]
    imagenes = imagenes.filter(foto => foto!==null)
    indice = 0;
    foto = document.createElement('img');
    foto.src=imagenes[indice]
    img.appendChild(foto);
    document.getElementById('ant').style.color = 'grey';
}

function cargarHabilidades(data,elem){
    for(let i=0;i<data.abilities.length;i++){
        const habilidad = document.createElement('li');
        habilidad.innerHTML=data.abilities[i].ability.name; 
        elem.querySelector('#habilidades').appendChild(habilidad)
    }            
}

function cargarTipos(data,elem){
    let str = '';
    for(let i=0;i<data.types.length;i++){
        str += "-" + data.types[i].type.name + ' ';  
    }   
    elem.querySelector('#tipos').textContent = str;
}

flechas.forEach(elem =>{
    elem.addEventListener('click',function(){
        if(foto !== undefined){
            if(this.id === 'ant'){
            if(indice>0){
                indice--
            }
            foto.src=imagenes[indice];
        }else{
            if(indice<imagenes.length-1){
                indice++
            }
            foto.src=imagenes[indice];  
        }
        chequearColor();
        }
    })
})

function chequearColor(){
    const ant = document.getElementById('ant');
    const sig = document.getElementById('sig');
    if(indice === 0){
        ant.style.color = 'grey';
    }else if(indice === imagenes.length-1){
        sig.style.color = 'grey';
    }else{
        ant.style.color = 'black';
        sig.style.color = 'black';
    }
}

logo_sonido.addEventListener('click', function(){
    if(foto !== undefined){
        audio.play();
    }
})

function medidaContenedor(){
    const width_cont = document.getElementById('contenedor_principal').getBoundingClientRect();
    

    mitad1.style.width=width_cont.width/2 + 'px';
    mitad2.style.width=width_cont.width/2 + 'px';
}