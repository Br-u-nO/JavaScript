function  arrayEquals(a, b) { 
    if((typeof a!=typeof b)||((a==null)||(b==null))||(a.length!=b.length))
        return false
    else{
        if( (a.length===0) && (b.length===0) )
            return true
        else
            return a.reduce(function(acc,actual,index,b){
                return acc=actual===b[index]
            });
    } 
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
 console.log(arrayEquals([],[]));