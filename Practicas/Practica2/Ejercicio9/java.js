var  words  = ['perro', 'gato', 'casa',
    'árbol', 'nube', 'día', 'noche',
    'zanahoria', 'babuino']

var  atoz  = [ "árbol", "babuino", "casa", "día", "gato",
    "noche", "nube", "perro", "zanahoria"]
    
var  ztoa  = ["zanahoria", "perro", "nube", "noche", "gato",
   "día", "casa", "babuino", "árbol"];

function ordenarAlfabeticamente(vec,orden){
    let i=0;
    let act=vec[i];
    while(i<vec.length){
        min=vec[i];
        let pos=i;
        let j=i+1;
        while(j<vec.length){
            if(min.localeCompare(vec[j])!=orden*-1){
                min=vec[j];
                pos=j;
            }
            j++;
        }
        vec[pos]=vec[i];
        vec[i]=min;
        i++;
    }
    return vec;
}
console.log(ordenarAlfabeticamente(words,-1));
console.log(ordenarAlfabeticamente(atoz,-1));
console.log(ordenarAlfabeticamente(ztoa,-1));

