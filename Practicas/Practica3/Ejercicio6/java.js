const lista = document.getElementById('lista_pais');
const input = document.getElementById('nombre');
const btn_busqueda = document.getElementById('buscar');
const btn_todos = document.getElementById('todos');
const msj = document.getElementById('msj');
const filtro = document.getElementById('filtrar');
const paises = [];



    fetch('https://restcountries.com/v3.1/all')
    .then(respuesta => respuesta.json())
    .then(data =>{
        data.forEach(element => {
            let pais ={
                nombre : element.name.common,
                capital: element.capital,
                poblacion: element.population,
                region:element.region,
                bandera: element.flags.png
            } 
            paises.push(pais);
        });
        
        
    })
    .catch(error => {
        alert("Error");
    })


function inicio(){
    paises.forEach(element =>{
        let contenedor = document.createElement('div');
        contenedor.classList='pais';
        contenedor.innerHTML= `
            <h3 class="nombre_pais">${element.nombre}</h3>
            <ul class="informacion_pais">
                <Li>Capital: ${element.capital}</li>
                <Li>Poblacion: ${element.poblacion}</li>
                <Li>Continente: ${element.region}</li>
            </ul>
            <img class="bandera" src="${element.bandera}">
            `
            lista.appendChild(contenedor)
    })
    

            
}


document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        inicio()
    },200)
    
})

   
function mostrar(nombre){
    if(nombre==''){  
        msj.style.opacity=1;
        msj.innerText='Escribe un nombre valido';
    }else{
        let paises_div = document.querySelectorAll('.pais');
        msj.style.opacity=0;

        paises_div.forEach(element =>{
            paises.forEach(pais =>{
                if(element.innerText.includes(pais.nombre))
                    nombre_buscado = pais.nombre;
            })

            if(!nombre_buscado.toLowerCase().includes(nombre.toLowerCase())){
                lista.removeChild(element);
            }

        })
        paises_div = document.querySelectorAll('.pais');
        if(paises_div.length === 0){
            msj.style.opacity=1;
            msj.innerText='No existe tal pais';
            inicio();
        }
    }
    }


    btn_todos.addEventListener('click',()=>{
        const paises = document.querySelectorAll('.pais');
        paises.forEach(element =>{
            lista.removeChild(element);
        })
        inicio()
    })

    btn_busqueda.addEventListener('click',()=>{
        const valor = input.value;
        mostrar(valor);
    })

    input
    .addEventListener('keydown',function(key){
        if(key.code==="Enter"){
            const valor = input.value;
            mostrar(valor);
        }
    })


    filtro.addEventListener('change',function(){
        const valor = this.value;
        if(valor === ''){
            inicio();
        }else{
            let clone =  paises.slice()
            for(let i=0;i<250;i++)clone.pop(0);
            console.log(paises)
        }
    })
