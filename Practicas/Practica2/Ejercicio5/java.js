function  arrayEquals(a, b) { 
    let index=0;
    ok = a.reduce((acc,actual,index,b)=>
        acc=actual===b[index]
    );
 }

 var  a  = [1,2,3,4];
 var  b  = [1,2,3,4];
 var  c  = [1,2,3,4,5];
 var  d  =  "Hola";
 var  e  =  null;
 console.log(arrayEquals(a, a));
 console.log(arrayEquals(a, b));
 console.log(arrayEquals(b, c));
 console.log(arrayEquals(e, c));
 console.log(arrayEquals(c, d));
 console.log(arrayEquals(e, e));