function contarCaracteres(texto){
    console.log(texto.length)
    console.log(texto.indexOf('ipsum'))
    let sub= texto.substring(1,4)
    console.log(sub.toUpperCase())
}
let text ='Lorem ipsum dolor sit amet. '

contarCaracteres(text);
