function multiply(...args){
  (args.length > 0) ? x = args.reduce((acc, cur) => acc * cur) : x = 1
  return helper = (...args) => {
    (args.length > 0) ? y = args.reduce((acc, cur) => acc * cur) : y = args[0]
    x = y ? x * y : x
    return y ? helper : x
  }
}

console.log(multiply(2, 3, 4)());
console.log(multiply(2, 3)(4)());
console.log(multiply(2)(3)(4)());
console.log(multiply(2)(3, 4)());

console.log(multiply(2)(3)() );
console.log(multiply(2)(3)(4)() );
console.log(multiply(2)(3)(4)(5)() );
console.log(multiply(2)(3)(4)(5)(6)());

console.log(multiply()(2)(3)(4)(5)(6)());
