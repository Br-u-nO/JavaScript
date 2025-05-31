var  alice  = {
    name : "Alice",
    dob : new  Date(2001, 3, 4),
    height : 165,
    weight : 68
    };
var  bob  = {
    name : "Robert",
    dob : new  Date(1997, 0, 31),
    height : 170,
    weight : 88
};
var  charly  = {
    name : "Charles",
    dob : new  Date(1978, 9, 15),
    height : 188,
    weight : 102
};
var  lucy  = {
    name : "Lucía",
    dob : new  Date(1955, 7, 7),
    height : 155,
    weight : 61
};
var  peter  = {
    name : "Peter",
    dob : new  Date(1988, 2, 9),
    height : 165,
    weight : 99
};
var  luke  = {
    name : "Lucas",
    dob : new  Date(1910, 11, 4),
    height : 172,
    weight : 75
 };

 personas=[peter,luke,lucy,charly,bob,alice]

 function mayores25 (personas){
        actual=new Date();
        actual.setTime(actual.getTime()-788400000000)
        return personas.filter((persona)=>
            persona.dob<actual);
 }

 function indexarNombres(vec){
        let edades=[];
        vec.forEach(elem =>{
            edades[elem.name]=( Math.floor((new Date().getTime() - elem.dob.getTime() ) / 3.1536E+10) )
            edades.length+=1
        });
        return(edades)
 }

 function IMCmayores40(personas){
    let mayorescumplen=[];
    actual=new Date();
    actual.setTime(actual.getTime()-1261440000000)

    mayores= personas.filter((persona)=>
        persona.dob<actual);
    
    mayores.forEach(elem =>
        mayorescumplen[elem.name]=elem.weight/((elem.height/100)*(elem.height/100))
    );
    return mayorescumplen; 
 }
 function IMCpromedio (personas){
        let tot= personas.reduce((acc,act)=>{
            return acc+(act.weight/((act.height/100)*(act.height/100)));
        },0);
        return tot/personas.length
 }

 function masJoven (personas){
        const edades=indexarNombres(personas);
        min={
            persona:undefined,
            edad:999
        }
        console.log()
        personas.forEach((elem)=>{
            if(edades[elem.name]<min.edad){
                min.persona=elem;
                min.edad=edades[elem.name];
            }  
        });
        return min.persona;
 }

 function ordenAltura(personas){
        duplicado= personas.map(function(x){
            return x;
        });
        max={
            persona:undefined,
            pos:0
        }
        for(let i=0;i<duplicado.length;i++){
            max.persona=duplicado[i];
            max.pos=i;
            for(let j=i+1;j<duplicado.length;j++)
                if(duplicado[j].height>max.persona.height){
                    max.persona=duplicado[j];
                    max.pos=j;
                }
            duplicado[max.pos]=duplicado[i]
            duplicado[i]=max.persona
        }
        return duplicado;
 }
console.log(mayores25(personas));
console.log(indexarNombres(personas));
console.log(IMCmayores40(personas));
console.log('IMC promedio: '+IMCpromedio(personas));
console.log(masJoven(personas))
console.log(ordenAltura(personas))
console.log(personas)
