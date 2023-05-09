function multiply(...args){
  let x = (args.length > 0)
    ? args.reduce((acc, cur) => acc * cur)
    : 1
  return helper = (...args) => {
    let y = (args.length > 0)
      ? args.reduce((acc, cur) => acc * cur)
      : args[0]
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
