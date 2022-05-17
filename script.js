let n = 10;
let first = 0;
let second = 1;
let first1 = 0;
let second1 = 1;
let sum_while = 0;
let sum_for = 0;
let count = 1;


if (n < 3) {
    sum_while = 1;
} else {
    while (count < n - 1) {
        sum_while = first1 + second1;
        first1 = second1;
        second1 = sum_while;
        count++;
    }
}

console.log(sum_while);


if (n < 3) {
    sum_for = 1;
} else {
    for (let i = 1; i < n - 1; i++) {
        if (n == 2) {
            sum_for = 1;
            break;
        }
        sum_for = first + second;
        first = second;
        second = sum_for;
    }
}


console.log(sum_for);

console.log(sum_while == sum_for);