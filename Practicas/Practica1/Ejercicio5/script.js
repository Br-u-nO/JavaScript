let A,B,C

function operacionNumerica(a,b,c){
    console.log(a+b*c)
    console.log(Math.max(a,b,c))
}


A=Math.floor(Math.random() * 100)
B=Math.floor(Math.random() * 100)
C=Math.floor(Math.random() * 100)
operacionNumerica(A,B,C)