function  isInteger(x) { 
    ok=false;
    if(typeof x == "number")
        if(x-Math.floor(x)===0)
            ok=true;
    console.log(ok);
}

isInteger(2); // retorna true
isInteger(2.0); // retorna true
isInteger(2.1); // retorna false
isInteger(-10); // retorna true
isInteger([1]); // retorna false
isInteger("2"); // retorna false
isInteger(true); // retorna false
isInteger(null); // retorna false
var  num;
isInteger(num); // retorna false