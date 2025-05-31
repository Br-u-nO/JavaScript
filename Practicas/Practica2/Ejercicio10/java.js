var  words  = ['perro', 'gato', 'casa',
    'árbol', 'nube', 'día', 'noche',
    'zanahoria', 'babuino']

var  atoz  = [ "árbol", "babuino", "casa", "día", "gato",
    "noche", "nube", "perro", "zanahoria"]
    
var  ztoa  = ["zanahoria", "perro", "nube", "noche", "gato",
   "día", "casa", "babuino", "árbol"];

function ordenarLongitud(vec){
    let i=0;
    while(i<vec.length){
        let obj={
            max:vec[i],
            pos:i
        }
        let j;
        for (j=i;j<vec.length;j++)
            if(vec[j].length>obj.max.length){
                obj.max=vec[j];
                obj.pos=j;
            }
        console.log(obj)
        vec[obj.pos]=vec[i];
        vec[i]=obj.max;
        i++;
    }
    return vec;
}
console.log(ordenarLongitud(words));
console.log(ordenarLongitud(atoz));
console.log(ordenarLongitud(ztoa));
