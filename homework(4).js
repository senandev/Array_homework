//4. Напишите функцию, которая принимает массив с любым уровнем вложенных массивов и возвращает новый массив, где все элементы на 0 уровне

const nastedArray = function (array = []) {
    if (Array.isArray(array)) {            // metod isArray dla togo cto bi funkcia prinimala tolko massiv 
        console.log(array.flat(Infinity))  //flat s parametrom infinity ctob raskrival massiv s lubim urovnem vlojennosti
    } else {
        console.log('not found');
    }
}
const array = [1, 2, 3, [4, 5, 6, [7, [8, [9, [10]]]]][11, 12]];
nastedArray(array);