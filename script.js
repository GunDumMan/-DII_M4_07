let employee = [5];
let totalSalary = 0;
let averrageAge = 0;

employee[0] = {
    'name': 'นาย ก.',
    'age': 68,
    'salary': 75900,
}
employee[1] = {
    'name': 'นาย ข.',
    'age': 35,
    'salary': 55400,
}
employee[2] = {
    'name': 'นาย ค.',
    'age': 51,
    'salary': 81000,
}
employee[3] = {
    'name': 'นาย ง.',
    'age': 76,
    'salary': 111000,
}
employee[4] = {
    'name': 'นาย จ.',
    'age': 22,
    'salary': 20500,
}

for (let i = 0; i < employee.length; i++) {
    totalSalary = totalSalary + employee[i].salary;
}

for (let i = 0; i < employee.length; i++) {
    averrageAge = averrageAge + employee[i].age;
}

averrageAge = averrageAge / employee.length;



console.log('Total salary = ' + totalSalary);
console.log('Average Age = ' + averrageAge);