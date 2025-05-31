function  reduce(array, binaryOperation, initialValue){
    if(initialValue==undefined)
        initialValue=0;
    binaryOperation=0;
    array.forEach(num => {
        binaryOperation=sum(binaryOperation,num);
    });
    return binaryOperation;
    
}

    var  numbers  = [ 1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56 ];
    var  sum  = (x, y) =>  x  +  y;
    numbers.reduce(sum, 0);
    reduce(numbers, sum, 0);
    console.log(numbers.reduce(sum,0));
    console.log(reduce(numbers,sum,0))