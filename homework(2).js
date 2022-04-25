//2. Написать функцию, которая принимает три параметра. Первый параметр - массив. 
//Второй параметр - строка - “start” или “end”. 
//Третий параметр - значение. Это может быть как одно значение, так и массив значений. 
//В зависимости от второго параметра, функция добавляет третий параметр в массив 
//(если третий параметр - массив, то его нужно раскрыть), который отправлен первым параметров, 
//в конец или в начало и возвращает длину нового массива. 
//Нельзя пользоваться методами push, unshift
const array = [1, 2, 3];
const arrayFoo = function ([], string, array1) {
    if (string == 'start') {
        arr2 = [array1, ...array];        //dla dobavleniya v pered ili v konec podumal etot variant lucwe ,i sam massiv ne menaetsa.
        console.log(arr2.flat(Infinity)) ////flat s parametrom infinity ctob raskrival massiv s lubim urovnem vlojennosti
    } else if (string == 'end') {
        arr3 = [...array,array1]
        console.log(arr3.flat(Infinity));
    }
    else{
        console.log('not found');
    }
}
arrayFoo(array, 'start', [5,6,[1,2]]);
console.log(array);