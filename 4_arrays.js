const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]

console.log(nested.flat()) //Убирает уровень вложенности в массиве
console.log(nested.flat().flat())
console.log(nested.flat(2)) //Убирает 2 уровня вложенности в массиве

const techs = ['react redux', 'angular', 'vue', 'deno and node']

console.log(techs.map(tech => tech.split(' '))) //Разбивает на элементы массива
console.log(techs.map(tech => tech.split(' ')).flat()) //Если нужно их объединить, можно было бы сделать так
console.log(techs.flatMap(tech => tech.split(' '))) //Но добавлен метод flatMap