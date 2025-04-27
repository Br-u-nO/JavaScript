var names = ["Jhon","Paul","George","Ringo"];

function concat(left,right){
    return left.concat(right)
}

console.log(names.reduce(concat))
console.log([].reduce(concat))