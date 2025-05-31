function  identity(x) { return  x; }
 var  id  =  function(x) { return  x; }
 var  iden  =  x  =>  x;
 var  identidad  =  identity
 var porDos =function (x) { return x*2 }
 console.log(identity('Hola'));
 console.log(id('Hello'));
 console.log(iden('Buen día'));
 console.log(identidad('Buen día'))

 console.log(identidad('Buen día')===identity('Buen día'))
 console.log(porDos(4));
 console.log(porDos);