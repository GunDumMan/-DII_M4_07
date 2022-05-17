let n = 1;
let count = 0;

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        count++;
    }
}


if (n == 0 || n == 1) {
    count = 9999;
}
if (count > 2) {
    console.log('not prime number')
} else {
    console.log('prime number')
}