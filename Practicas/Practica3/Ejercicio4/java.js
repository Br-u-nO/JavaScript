const lista = document.getElementById('lista_pais');


fetch('https://restcountries.com/v3.1/all')
    .then(respuesta => respuesta.json())
    .then(data =>{
        data.forEach(element => {
            let contenedor = document.createElement('p');
            contenedor.innerHTML= `
            <div class="pais">
                <h3 class="nombre_pais">${element.name.common}</h3>
                <ul class="informacion_pais">
                    <Li>Capital: ${element.capital}</li>
                    <Li>Poblacion: ${element.population}</li>
                    <Li>Continente: ${element.region}</li>
                </ul>
                <img class="bandera" src="${element.flags.png}">
            </div>
            `
            lista.appendChild(contenedor)
        });
    })
    .catch(error => {
        alert("Error");
    })