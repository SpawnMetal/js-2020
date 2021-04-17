const person =
{
    name: 'Max',
    age: 30
}

console.log(Object.getOwnPropertyDescriptor(person, 'age')) //Вывод свойств параметра
console.log(Object.getOwnPropertyDescriptors(person)) //Получает свойства всех полей

console.log(Object.entries(person)) //entries преобразовывает объект в массив
console.log(Object.fromEntries(Object.entries(person))) //fromEntriesпреобразовывает массив в объект

console.log(Object.entries(['M', 'A', 'X']))

for(const [key, value] of Object.entries(person)) console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)

console.log(Object.values(person))
console.log(Object.keys(person))