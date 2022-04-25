//5. Напишите функцию, которая будет принимать объект с любым уровнем вложенности и корректно копировать его, возвращая скопированный вариант

function ObjFoo(obj = {}){
        const obj1 = JSON.parse(JSON.stringify(obj));
        console.log(JSON.stringify(obj1));
        console.log({}.toString.call(obj));
}
const obj = {
    "id": 1,
    "name": "Elliot Laroze",
    "salary": 604,
    "age": 46,
    obj:{
        "id": 2,
        "name": "Tibold Strickland",
        "salary": 575,
        "age": 34
    }
};
ObjFoo(obj);