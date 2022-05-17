let n = 6;
let sum1 = 1;
let sum = 1;
let x = 1;

while (x <= n) {
    if (n == 0) {
        sum = 1;
        break;
    }
    sum1 = sum1 * x;
    x++;
}

console.log(sum1);

for (let i = 1; i <= n; i++) {
    if (n == 0) {
        sum = 1;
        break;
    }
    sum = sum * i;
}

console.log(sum);