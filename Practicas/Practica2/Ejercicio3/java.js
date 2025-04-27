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
    let suma=0;
    if((values.length!=0)&&(hayNumero(values))){
        suma=values.reduce(function(ant,act,index){
            if((typeof act=="number"))
                return ant+act
            else{
                index+=1;
                return ant;
            }
        });
        return suma/values.length;
    }   
    return ("Esta vacio o solo posee elementos no numericos")
 }
function  sum(values) { 
    if((values.length!=0)&&(hayNumero(values))){
        return values.reduce(function(ant,act,index){
            if((typeof act=="number"))
                return ant+act
            else{
                index+=1;
                return ant;
            }
        });
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