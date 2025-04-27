var  prices  = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
var  names  = ["John", "Paul", "George", "Ringo"];


function hayNumero(valores){
    let ok;
    valores.forEach(element => { 
        if(typeof element=="number")
            ok= true;
    })
        if(ok!=true)
            ok= false;
        return ok;
}
function  max(values) { 
    let max=-1;
    if((values.length!=0)&&(hayNumero(values))){
        return Math.max(...values)
    }   
    return ("Esta vacio o solo posee elementos no numericos")
    
}
function  min(values) { 
    let min=999999;
    if((values.length!=0)&&(hayNumero(values))){
        return Math.min(...values)
    };  
    return ("Esta vacio o solo posee elementos no numericos")
}
function  avg(values) { 
    let suma=0,cant=0;
    if(values.length!=0){
        values.forEach(element => {
            if(typeof element=="number")
                suma+=element;
                cant+=1;
        });
        if(suma!=0)
            return(suma/cant)
    }   
    return ("Esta vacio o solo posee elementos no numericos")
 }
function  sum(values) { 
    let suma=0;
    if(values.length!=0){
        values.forEach(element => {
            if(typeof element=="number")
                suma+=element;
        });
        if(suma!=0)
            return(suma)
    }   
    return ("Esta vacio o solo posee elementos no numericos")
}

console.log(max(prices));
 console.log(min(prices));
 console.log(avg(prices));
 console.log(sum(prices));
 console.log(max(names));
 console.log(min(names));
 console.log(avg(names));
console.log(sum(names));
 console.log(max([]));
 console.log(min([]));
 console.log(avg([]));
 console.log(sum([]))