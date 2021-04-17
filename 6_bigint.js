console.log(Number.MAX_SAFE_INTEGER) //Max значение int

console.log(typeof 10)
console.log(typeof 10n) //bigint

// console.log(10n - 4) //error
console.log(parseInt(10n) - 4) //6
console.log(10n - BigInt(4)) //6n