let employee = Array(5);
let totalSalary = 0;
let totalSalary1 = 0;
let averrageAge = 0;
let averrageAge1 = 0;
let tax = Array(5);
let totalTax = 0;
let totalTax1 = 0;

function findSum(array, key) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i][key];
    }
    return sum;
}

function findAver(array, key) {
    sum = findSum(array, key);
    aver = sum / array.length;
    return aver;
}

function findAverTax(array, key) {
    let tax = Array(array.length);
    let averTax = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i][key] * 12) <= 150000) {
            tax[i] = 0;
        } else if ((array[i][key] * 12) <= 300000) {
            tax[i] = (((array[i][key] * 12) - 150000) * 5 / 100);
        } else if ((array[i][key] * 12) <= 500000) {
            tax[i] = (((array[i][key] * 12) - 300000) * 10 / 100) + 7500;
        } else if ((array[i][key] * 12) <= 750000) {
            tax[i] = (((array[i][key] * 12) - 500000) * 15 / 100) + 27500;
        } else if ((array[i][key] * 12) <= 1000000) {
            tax[i] = (((array[i][key] * 12) - 750000) * 20 / 100) + 65000;
        } else if ((array[i][key] * 12) <= 2000000) {
            tax[i] = (((array[i][key] * 12) - 1000000) * 25 / 100) + 115000;
        } else if ((array[i][key] * 12) <= 5000000) {
            tax[i] = (((array[i][key] * 12) - 2000000) * 30 / 100) + 365000;
        } else {
            tax[i] = (((array[i][key] * 12) - 5000000) * 35 / 100) + 1265000;
        }
    }

    for (let i = 0; i < array.length; i++) {
        averTax = averTax + tax[i];
    }

    averTax = averTax / array.length;
    return averTax;
}

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

for (let i = 0; i < employee.length; i++) {
    if ((employee[i].salary * 12) <= 150000) {
        tax[i] = 0;
    } else if ((employee[i].salary * 12) <= 300000) {
        tax[i] = (((employee[i].salary * 12) - 150000) * 5 / 100);
    } else if ((employee[i].salary * 12) <= 500000) {
        tax[i] = (((employee[i].salary * 12) - 300000) * 10 / 100) + 7500;
    } else if ((employee[i].salary * 12) <= 750000) {
        tax[i] = (((employee[i].salary * 12) - 500000) * 15 / 100) + 27500;
    } else if ((employee[i].salary * 12) <= 1000000) {
        tax[i] = (((employee[i].salary * 12) - 750000) * 20 / 100) + 65000;
    } else if ((employee[i].salary * 12) <= 2000000) {
        tax[i] = (((employee[i].salary * 12) - 1000000) * 25 / 100) + 115000;
    } else if ((employee[i].salary * 12) <= 5000000) {
        tax[i] = (((employee[i].salary * 12) - 2000000) * 30 / 100) + 365000;
    } else {
        tax[i] = (((employee[i].salary * 12) - 5000000) * 35 / 100) + 1265000;
    }
}

for (let i = 0; i < tax.length; i++) {
    totalTax = totalTax + tax[i];
}

totalTax = totalTax / employee.length;
averrageAge = averrageAge / employee.length;

averrageAge1 = findAver(employee, 'age',);
totalSalary1 = findSum(employee, 'salary');
totalTax1 = findAverTax(employee, 'salary');

console.log(totalSalary1);
console.log(averrageAge1);
console.log(totalTax1);
console.log('Total salary = ' + totalSalary);
console.log('Average Age = ' + averrageAge);
console.log('Average tax = ' + totalTax);