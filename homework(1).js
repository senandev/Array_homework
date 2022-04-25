const array = [{
  "id": 1,
  "name": "Elliot Laroze",
  "salary": 604,
  "age": 46
}, {
  "id": 2,
  "name": "Tibold Strickland",
  "salary": 575,
  "age": 34
}, {
  "id": 3,
  "name": "Aldon Kenafaque",
  "salary": 816,
  "age": 32
}, {
  "id": 4,
  "name": "Danice O'Sirin",
  "salary": 107,
  "age": 50
}, {
  "id": 5,
  "name": "Axe Lofthouse",
  "salary": 541,
  "age": 51
}, {
  "id": 6,
  "name": "Adelice Emberton",
  "salary": 702,
  "age": 46
}, {
  "id": 7,
  "name": "Shannen Speir",
  "salary": 525,
  "age": 50
}, {
  "id": 8,
  "name": "Albert Betke",
  "salary": 113,
  "age": 26
}, {
  "id": 9,
  "name": "Terese Mawer",
  "salary": 721,
  "age": 42
}, {
  "id": 10,
  "name": "Emmerich Rodge",
  "salary": 625,
  "age": 29
}];

//1.1 Вычислить среднюю зарплату всех работников и вернуть.
function AverageSalary() {
  const initialValue = 0;
  const allSalary = array.reduce(function (prev, curr) {
    return prev + curr.salary;
  }, initialValue);
  console.log(allSalary / array.length);
}
AverageSalary();

//1.2 Изменить имена всех сотрудников, приписав к ним префикс “Front End Camp Employee - EMPLOYEE_NAME” и вернуть измененный массив.
function ArrayChange(){
  const employee = array.map((curr) => {
    return 'Front End Camp Employee - ' + curr.name;
  })
  console.log(employee)
}
ArrayChange();

//1.3 Оставить в массиве только тех работников, у которых возраст ниже 30 и вернуть массив.
function Under(){
  const ageForEmployee = array.filter(function (num) {
    return num.age < 30;
  });
  ageForEmployee.forEach(element => console.log(element));
}
Under();
//1.4 В данном случае функция будет принимать еще и второй параметр, в который мы будем отправлять строку. 
//Функция должна найти в массиве объект, у которого имя содержит ту строку, которую мы пытаемся найти и вернуть этот объект. 
//Если такого объекта не существует, то функция возвращает строку "Not found".
const searching = (nameEmployee) => {
  const person = array.find((curr) => {
    return curr.name == nameEmployee;
  });
  if (person) {
    console.log(person);
  } else {
    console.log('not found');
  }
}
searching('Albert Betke');

//1.5 Вернуть имена всех работников в одной строке - “Our employees list is: “EMPLOYEE_NAME_1, EMPLOYEE_NAME_2, EMPLOYEE_NAME_3”. 
//В данном случае разрешается изменить массив, если нужно.
function AllEmployee(){
  const listOurEmp = array.map((curr) => {
    return curr.name;
  })
  console.log(['Our employees list is: ' + listOurEmp.join(',')]);
}
AllEmployee();

//1.6 В данном случае функция также будет принимать второй параметр - строку “age” или “salary”.
//Вернуть массив, в котором элементы отсортированы по возрасту или зарплате соответственно

//sorting by age
const ageSorting = function ([]) {
  array.sort(function (age1, age2) {
    if (age1.age > age2.age) {
      return 1
    }
    if (age2.age > age1.age) {
      return -1
    }
  })
  console.log(JSON.stringify(array))
}
ageSorting(array);

//sorting by salary
const salarySorting = function ([]) {
  array.sort(function (salary1, salary2) {
    if (salary1.salary > salary2.salary) {
      return 1
    }
    if (salary2.salary > salary1.salary) {
      return -1
    }
  })
  console.log(JSON.stringify(array))
}
salarySorting(array);