function  isNumeric(str) { 
    ok=false;
    if(typeof str == "string")
       ok=!isNaN(str);
    console.log(ok);
}

isNumeric("2") // retorna true
isNumeric("2a") // retorna false
isNumeric(2) // retorna false