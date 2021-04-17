const start = '                    Hello Youtube '
const end = 'This is new JavaScript features           '

console.log(start.trimStart() + end.trimEnd())
console.log((start + end).trim())

console.log('vk'.padStart(6)) //Какой длины будет строка
console.log('vk'.padStart(6, 'www.')) //Чем заполняется пространство
console.log('vk'.padStart(16, 'www.')) //Будет дублироваться, т. к. длина строки будет 16

console.log('vk'.padEnd(6, '.com'))

function tag(strings, name, age) //strings будет являться фразами, разбитыми между параметрами в строке
{
    const [s1, s2, s3] = strings
    const ageStr = age > 42 ? 'старшим' : 'младшиим'
    return `${s1}${name}${s2}${ageStr}${s3}`
}

const person =
{
    name: 'Максим',
    age: 50
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`

console.log(output)