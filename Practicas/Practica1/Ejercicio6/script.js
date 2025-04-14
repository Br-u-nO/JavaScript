let dia1=new Date(2024,4,14,18,20,5)
let dia2=new Date(1575978300000)

function imprimirFecha (fecha){
    console.log(fecha.toGMTString())
}

function invertirAño(fecha1,fecha2){
    let temp=fecha1.getFullYear()
    fecha1.setFullYear(fecha2.getFullYear())
    fecha2.setFullYear(temp)
    console.log('fecha 1: ' + fecha1.toString())
    console.log('fecha 2: ' + fecha2.toString())
}
function restaFecha(fecha1,fecha2){
    let max=Math.max(fecha1.getTime(),fecha2.getTime())
    let min=Math.min(fecha1.getTime(),fecha2.getTime())
    let fecha3=new Date(max-min)
    console.log('fecha 1: ' + fecha1.toString())
    console.log('fecha 2: ' + fecha2.toString())
    return fecha3
}

imprimirFecha(dia1)
invertirAño(dia1,dia2)
console.log('______________________________________')
let dia3=restaFecha(dia1,dia2)
console.log(dia3.toGMTString())