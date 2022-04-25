//3. Написать функцию, которая принимает два параметра. Первый параметр - массив. Второй параметр - строка - “start” или “end”. 
//В зависимости от второго параметра, функция удаляет один элемент из конца или из начала отправленного массива. Возвращает удаленный элемент. 
//Нельзя пользоваться методами pop, shift
const array = [1, 2, 3, 4];
const removeFunc = function ([], string) {
    if (string == 'start') {
        const remove = array.splice(0, 1); //ispolzaval metod splice potamucto on pokazalsa prowe,dinamicno i citabilno.
        console.log(remove);
    } else if (string == 'end') {
        const remove = array.splice(array.length - 1, 1);
        console.log(remove);
    }
    else{
        console.log('not found');
    }
}
removeFunc(array,'end');